from database import Base
from sqlalchemy import Column, Integer, ForeignKey


class TestResponses(Base):
    __tablename__ = "testresponses"
    responseid = Column(Integer, primary_key=True, index=True)
    attemptid = Column(Integer, ForeignKey("testattempts.attemptid"), nullable=False)
    questionid = Column(Integer, ForeignKey("testquestions.questionid"), nullable=False)
    answerid = Column(Integer, ForeignKey("testanswers.answerid"), nullable=False)
