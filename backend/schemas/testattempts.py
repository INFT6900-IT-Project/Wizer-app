from database import Base
from sqlalchemy import Column, Integer, String, Boolean, Numeric


class Testattempts(Base):
    __tablename__ = "testattempts"
    attemptid = Column(Integer, primary_key=True, index=True)
    userid = Column(Integer, nullable=False)
    moduleid = Column(Integer, nullable=False)
    attemptdate = Column(data_type="timestamp")
    score = Column(Numeric)
    ispassed = Column(Boolean)