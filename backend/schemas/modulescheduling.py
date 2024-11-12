from database import Base
from sqlalchemy import Column, Integer, ForeignKey, DateTime


class ModuleScheduling(Base):
    __tablename__ = "modulescheduling"
    scheduleid = Column(Integer, primary_key=True, index=True)
    moduleid = Column(Integer, ForeignKey("modules.moduleid"), nullable=False)
    startdate = Column(DateTime)
    enddate = Column(DateTime)
    frequencydays = Column(Integer, nullable=False)
