from database import Base
from sqlalchemy import Column, Integer, Boolean, ForeignKey


class TestAttempts(Base):
    __tablename__ = "testattempts"
    attemptid = Column(Integer, primary_key=True, index=True)
    userid = Column(Integer, ForeignKey("users.userid"), nullable=False)
    moduleid = Column(Integer, ForeignKey("modules.moduleid"), nullable=False)
    attemptdate = Column(data_type="timestamp")
    score = Column(Numeric, nullable=True)
    ispassed = Column(Boolean)
