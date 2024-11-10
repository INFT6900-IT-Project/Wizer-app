from database import Base
from sqlalchemy import Column, Integer, String, Boolean


class Testanswers(Base):
    __tablename__ = "testanswers"
    answerid = Column(Integer, primary_key=True, index=True)
    questionid = Column(Integer, nullable=False)
    answertext = Column(String, nullable=False)
    iscorrect = Column(Boolean)