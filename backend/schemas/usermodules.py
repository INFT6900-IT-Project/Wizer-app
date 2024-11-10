from database import Base
from sqlalchemy import Column, Integer, String, Boolean


class Usermodules(Base):
    __tablename__ = "usermodules"
    usermoduleid = Column(Integer, primary_key=True, index=True)
    userid = Column(Integer, nullable=False)
    moduledeid = Column(Integer, nullable=False)
    registrationdate = Column(data_type="timestamp")