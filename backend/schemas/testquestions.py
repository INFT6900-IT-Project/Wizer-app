from database import Base
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime


class TestQuestions(Base):
    __tablename__ = "testquestions"
    questionid = Column(Integer, primary_key=True, index=True)
    moduleid = Column(Integer, ForeignKey("modules.moduleid"), nullable=False)
    questiontext = Column(String, nullable=False)
    createdat = Column(DateTime)
    updatedat = Column(DateTime)
