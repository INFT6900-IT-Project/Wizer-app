import os
from datetime import datetime, timedelta
from io import BytesIO
from pathlib import Path

import pyotp
import qrcode
from database import get_db
from dotenv import load_dotenv
from fastapi import APIRouter, HTTPException, Depends, status
from fastapi.responses import StreamingResponse
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from passlib.context import CryptContext
from pydantic import BaseModel
from schemas.users import User
from sqlalchemy.orm import Session
from utils.jwt import create_access_token, verify_token

db_connection = get_db()

env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)


class Configs:
    SECRET_KEY: str = os.getenv("SECRET_KEY")
    ALGORITHM: str = os.getenv("ALGORITHM")
    ACCESS_TOKEN_EXPIRE_MINUTES: int = os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES")


router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


class UserCreate(BaseModel):
    username: str
    password: str
    first_name: str
    last_name: str
    email: str
    phone_number: str
    role: str
    created_at: datetime


class MFACreate(BaseModel):
    username: str


class TOTPValidation(BaseModel):
    username: str
    totp: int

    @staticmethod
    def verify_otp(secret, otp):
        totp = pyotp.TOTP(secret)
        return totp.verify(otp)


def get_user_by_username(db: Session, username: str):
    return db.query(User).filter(User.username == username).first()


def create_user(db: Session, user_data: UserCreate):
    try:
        hashed_password = pwd_context.hash(user_data.password)
        new_user = User(username=user_data.username,
                        passwordhash=hashed_password,
                        email=user_data.email,
                        firstname=user_data.first_name,
                        lastname=user_data.last_name,
                        phonenumber=user_data.phone_number,
                        role=user_data.role,
                        createdat=user_data.created_at)
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        return new_user
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Failed to complete registration: {str(e)}")


@router.post("/register")
def register_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = get_user_by_username(db, username=user.username)
    if db_user:
        raise HTTPException(status_code=400, detail="Username already registered")
    return create_user(db=db, user_data=user)


# Authenticate the user
def authenticate_user(username: str, password: str, db: Session):
    user = db.query(User).filter(User.username == username).first()
    if not user:
        return False
    if not pwd_context.verify(password, user.passwordhash):
        return False
    return user


@router.post("/auth/login")
def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = authenticate_user(form_data.username, form_data.password, db)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=int(Configs.ACCESS_TOKEN_EXPIRE_MINUTES))
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}


@router.get("/auth/verify-token/{token}")
async def verify_user_token(token: str):
    verify_token(token=token)
    return {"message": "Token is valid"}


def add_2fa_to_user(db: Session, user_data: User):
    try:
        user = db.query(User).filter(User.username == user_data.username).first()
        if not user:
            raise HTTPException(status_code=404, detail="User not found")

        totp_secret = pyotp.random_base32()
        uri = pyotp.TOTP(totp_secret).provisioning_uri(name=user.username, issuer_name="Wizer")
        img = qrcode.make(uri)
        buf = BytesIO()
        img.save(buf)
        buf.seek(0)

        user.twofactorsecret = totp_secret
        user.istwofactorenabled = True
        db.commit()
        db.refresh(user)
        return buf
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Failed to add 2FA: {str(e)}")


@router.post('/mfa/otp-register/')
async def mfa_otp_register(user_data: MFACreate, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == user_data.username).first()
    if not user:
        raise HTTPException(status_code=400, detail="User not registered")
    buf = add_2fa_to_user(db, user)
    return StreamingResponse(buf, media_type="image/png")


@router.post('/mfa/validate-totp/')
async def validate_totp(totp_details: TOTPValidation, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == totp_details.username).first()

    if not user:
        raise HTTPException(status_code=400, detail="Please re-register MFA.")

    totp_secret = user.twofactorsecret
    totp = pyotp.TOTP(totp_secret)

    if not totp.verify(totp_details.totp):
        raise HTTPException(status_code=403, detail="Wrong TOTP entered.")

    return {"message": "OTP is valid"}
