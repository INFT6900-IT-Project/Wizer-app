from database import Base
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, DateTime


class Modules(Base):
    __tablename__ = "modules"
    moduleid = Column(Integer, primary_key=True, index=True)
    modulename = Column(String, nullable=False)
    moduledescription = Column(String)
    ownerid = Column(Integer, ForeignKey("users.userid"), nullable=False)
    isactive = Column(Boolean)
    createdat = Column(DateTime)
    updatedat = Column(DateTime)
