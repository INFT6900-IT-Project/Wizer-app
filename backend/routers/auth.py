import os
from datetime import datetime, timedelta
from io import BytesIO
from pathlib import Path
import random
import smtplib
import pyotp
import qrcode
from database import get_db
from dotenv import load_dotenv
from fastapi import APIRouter, status
from fastapi import HTTPException, Depends
from fastapi.responses import StreamingResponse
from fastapi.security import OAuth2PasswordBearer
from fastapi.security import OAuth2PasswordRequestForm
from jose import JWTError, jwt
from passlib.context import CryptContext
from pydantic import BaseModel
from schemas.users import User
from sqlalchemy.orm import Session

db_connection = get_db()

env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)


class Configs:
    SECRET_KEY: str = os.getenv("SECRET_KEY")
    ALGORITHM: str = os.getenv("ALGORITHM")
    ACCESS_TOKEN_EXPIRE_MINUTES: int = os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES")


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


class Configs:
    SECRET_KEY: str = os.getenv("SECRET_KEY")
    ALGORITHM: str = os.getenv("ALGORITHM")
    ACCESS_TOKEN_EXPIRE_MINUTES: int = os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES")


router = APIRouter()


class UserCreate(BaseModel):
    username: str
    password: str
    first_name: str
    last_name: str
    email: str
    phone_number: str
    role: str



class MFACreate(BaseModel):
    username: str


class TOTPValidation(BaseModel):
    username: str
    totp: int

    @staticmethod
    def verify_otp(secret, otp):
        totp = pyotp.TOTP(secret)
        return totp.verify(otp)
def get_email_by_username(db:Session, username:str):
    return db.query(User).filter(User.username == username).first().email

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
                        createdat=datetime.now())
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        # return new_user
        return {"message": f"User {str(user_data.username)} registered successfully"}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Failed to complete registration: {str(e)}")


@router.post("/auth/register", tags=["Auth"])
async def register_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = get_user_by_username(db, username=user.username)
    if db_user:
        raise HTTPException(status_code=400, detail="Username already registered")
    return "Register certified. User is not in system"

@router.post("/auth/register-accept",tags=["Auth"])
async def accept_register_user(user: UserCreate, db: Session = Depends(get_db)):
    return create_user(db=db, user_data=user)

# Authenticate the user
def authenticate_user(username: str, password: str, db: Session):
    user = db.query(User).filter(User.username == username).first()
    if not user:
        return False
    if not pwd_context.verify(password, user.passwordhash):
        return False
    return user


@router.post("/auth/login", tags=["Auth"])
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = authenticate_user(form_data.username, form_data.password, db)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=int(Configs.ACCESS_TOKEN_EXPIRE_MINUTES))
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta= access_token_expires )
    return {"access_token": access_token, "token_type": "bearer","mfa_enabled":user.istwofactorenabled}


# JWT config


def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, Configs.SECRET_KEY, algorithm=Configs.ALGORITHM)
    return encoded_jwt


def verify_token(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid authentication credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, Configs.SECRET_KEY, algorithms=[Configs.ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        return payload
    except JWTError:
        raise credentials_exception


def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid authentication credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, Configs.SECRET_KEY, algorithms=[Configs.ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        current_user = db.query(User).filter(User.username == username).first()
        if not current_user:
            raise credentials_exception
        return {
            "userid": current_user.userid,
            "username": current_user.username,
            "firstname": current_user.firstname,
            "lastname": current_user.lastname,
            "email": current_user.email,
            "phonenumber": current_user.phonenumber,
            "role": current_user.role,
            "istwofactorenabled": current_user.istwofactorenabled
        }
    except JWTError:
        raise credentials_exception

@router.post("/mfa/disable/", tags=["Auth/MFA"])
async def disable_mfa(user_data: MFACreate, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == user_data.username).first()
    if not user:
        raise HTTPException(status_code=400, detail="User not registered")
    user.twofactorsecret = None
    user.istwofactorenabled = False
    db.commit()
    db.refresh(user)
    return {"message": "MFA disabled successfully"}

@router.get("/auth/verify-token/{token}", tags=["Auth"])
async def verify_user_token(token: str):
    verify_token(token=token)
    return {"message": "Token is valid"}


@router.get("/users/me", tags=["Auth"])
async def current_user(token: str, db: Session = Depends(get_db)):
    return get_current_user(token=token, db=db)


class UserChangePassword(BaseModel):
    username: str
    old_password: str
    new_password: str


def verify_password(old_password, hashed_password):
    return pwd_context.verify(old_password, hashed_password)


@router.post("/change_password", tags=["Auth"])
async def change_password(request: UserChangePassword, db: Session = Depends(get_db)):
    try:
        user = db.query(User).filter(User.username == request.username).first()
        if user is None:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="User not found")

        if not verify_password(request.old_password, user.passwordhash):
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid old password")

        encrypted_password = pwd_context.hash(request.new_password)
        user.passwordhash = encrypted_password
        db.commit()
        db.refresh(user)
        return {"message": "Password changed successfully"}
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))
    



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


@router.post("/mfa/otp-register/", tags=["Auth/MFA"])
async def mfa_otp_register(user_data: MFACreate, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == user_data.username).first()
    if not user:
        raise HTTPException(status_code=400, detail="User not registered")
    buf = add_2fa_to_user(db, user)
    return StreamingResponse(buf, media_type="image/png")

@router.get("/users/all-users", tags=["Auth"])
async def get_all_users(db: Session = Depends(get_db)):
    users = db.query(User).all()
    output = [{"userid": user.userid,
            "username": user.username,
            "firstname": user.firstname,
            "lastname": user.lastname,
            "email": user.email,
            "phonenumber": user.phonenumber,
            "role": user.role,
            "istwofactorenabled": user.istwofactorenabled} for user in users]
    return output

@router.delete("/mfa/cancel/{username}", tags=["Auth/MFA"])
async def cancel_mfa(username:str,db: Session = Depends(get_db)):
    user= db.query(User).filter(User.username == username).first()
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found")
    user.istwofactorenabled = False
    user.twofactorsecret=None
    db.commit()
    return{"message": f"MFA has been canceled for the user {username}"}



@router.post("/mfa/validate-totp/", tags=["Auth/MFA"])
async def validate_totp(totp_details: TOTPValidation, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == totp_details.username).first()

    if not user:
        raise HTTPException(status_code=400, detail="Please re-register MFA.")

    totp_secret = user.twofactorsecret
    totp = pyotp.TOTP(totp_secret)

    if not totp.verify(totp_details.totp):
        raise HTTPException(status_code=403, detail="Wrong TOTP entered.")

    return {"message": "OTP is valid"}



#Verify email address:
@router.get("/auth/otp/{email}", tags=["Auth"])
async def send_otp(email:str):
    otp = generate_otp()
    send_gmail_otp(otp,email)
    return {"otp":otp}


def generate_otp():
    return random.randint(100000,999999)


def send_gmail_otp(otp,email):
    server=smtplib.SMTP('smtp.gmail.com',587)
    server.starttls()
    server.login('wizer920@gmail.com','ekwj hmku uqqn kole')
    body = "Hi there,"+"\n"+"\n"+"your OTP is "+str(otp)+"."
    subject = "Wizer OTP verification" 
    message = f'subject:{subject}\n\n{body}'
    server.sendmail("wizer920@gmail.com",email,message)
    server.quit()

#Admin bulk delete account
class UsersDelete(BaseModel):
    user_ids: str
    
@router.delete("/admin/delete_users", tags=["Admin"])
async def delete_users_by_list(user_list: UsersDelete, db:Session = Depends(get_db)):
    ids = [int(x) for x in user_list.user_ids.split(",")]
    try:
        db.query(User).filter(User.userid.in_(ids)).delete(synchronize_session=False)
        db.commit()
        return {"detail": "Users have been deleted successfully"}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))

#Admin delete account
@router.delete("/admin/{username}", tags=["Admin"])
async def delete_account(username:str, db:Session = Depends(get_db)):
    user= db.query(User).filter(User.username == username).first()
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found")
    db.delete(user)
    db.commit()
    return f"User {username} has been deleted successfully"
