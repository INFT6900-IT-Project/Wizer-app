from datetime import datetime
from pathlib import Path
from typing import Optional

from database import get_db
from dotenv import load_dotenv
from fastapi import APIRouter, Depends
from pydantic import BaseModel
from schemas.usermodules import UserModules
from sqlalchemy.orm import Session

db_connection = get_db()

env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)

router = APIRouter()


class UserModuleCreate(BaseModel):
    userid: int
    moduleid: int
    registrationdate: Optional[datetime] = None


@router.post("/usermodules")
def create_user_module(user_module: UserModuleCreate, db: Session = Depends(get_db)):
    db_user_module = UserModules(userid=user_module.userid, moduleid=user_module.moduleid,
                                 registrationdate=user_module.registrationdate)
    db.add(db_user_module)
    db.commit()
    return complete


class UserModuleGet(BaseModel):
    usermoduleid: int
    userid: int
    moduleid: int
    registrationdate: Optional[datetime] = None


# Get all users registered on a module
@router.get("/modules/{module_id}/users")
def get_module_users(module_id: int, db: Session = Depends(get_db)):
    module_users = db.query(UserModules).filter(UserModules.moduleid == module_id).all()
    return module_users


# Get all modules a user is registered for
@router.get("/users/{user_id}/modules")
def get_user_modules(user_id: int, db: Session = Depends(get_db)):
    user_modules = db.query(UserModules).filter(UserModules.userid == user_id).all()
    return user_modules
