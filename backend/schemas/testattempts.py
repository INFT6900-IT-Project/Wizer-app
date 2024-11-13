from database import Base
from sqlalchemy import Column, Integer, Boolean, ForeignKey, Numeric, DateTime


class TestAttempts(Base):
    __tablename__ = "testattempts"
    attemptid = Column(Integer, primary_key=True, index=True)
    userid = Column(Integer, ForeignKey("users.userid"), nullable=False)
    moduleid = Column(Integer, ForeignKey("modules.moduleid"), nullable=False)
    attemptdate = Column(DateTime)
    score = Column(Numeric(5, 2))
    ispassed = Column(Boolean)
