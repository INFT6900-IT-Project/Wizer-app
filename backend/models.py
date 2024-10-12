from sqlalchemy import Column, Integer, String, Boolean

from database import Base


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
    istwofactorenabled = Column(Boolean)
    twofactorsecret = Column(String)
    createdat = Column(data_type="timestamp")
    lastlogin = Column(data_type="timestamp")
