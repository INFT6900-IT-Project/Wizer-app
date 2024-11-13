from database import Base
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey


class TestAnswers(Base):
    __tablename__ = "testanswers"
    answerid = Column(Integer, primary_key=True, index=True)
    questionid = Column(Integer, ForeignKey("testquestions.questionid"), nullable=False)
    answertext = Column(String, nullable=False)
    iscorrect = Column(Boolean)
