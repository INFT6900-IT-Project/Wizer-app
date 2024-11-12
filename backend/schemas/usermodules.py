from database import Base
from sqlalchemy import Column, Integer, ForeignKey, DateTime


class UserModules(Base):
    __tablename__ = "usermodules"
    usermoduleid = Column(Integer, primary_key=True, index=True)
    userid = Column(Integer, ForeignKey("users.userid"), nullable=False)
    moduleid = Column(Integer, ForeignKey("modules.moduleid"), nullable=False)
    registrationdate = Column(DateTime)
