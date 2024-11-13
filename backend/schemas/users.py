from datetime import datetime

from database import Base
from sqlalchemy import Column, Integer, String, Boolean, DateTime


class User(Base):
    __tablename__ = "users"
    userid = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    passwordhash = Column(String)
    firstname = Column(String)
    lastname = Column(String)
    email = Column(String)
    phonenumber = Column(String)
    role = Column(String)
    istwofactorenabled = Column(Boolean, default=False)
    twofactorsecret = Column(String, nullable=True)
    createdat = Column(DateTime, default=datetime.utcnow)
