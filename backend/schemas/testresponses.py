from database import Base
from sqlalchemy import Column, Integer, String, Boolean

class Testresponses(Base):
    __tablename__ = "testresponses"
    responseid = Column(Integer, primary_key=True, index=True)
    attemptid = Column(Integer, nullable=False)
    questionid = Column(Integer, nullable=False)
    answerid = Column(Integer, nullable=False)