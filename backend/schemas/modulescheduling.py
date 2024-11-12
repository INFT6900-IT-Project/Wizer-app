from database import Base
from sqlalchemy import Column, Integer, ForeignKey


class ModuleScheduling(Base):
    __tablename__ = "modulescheduling"
    scheduleid = Column(Integer, primary_key=True, index=True)
    moduleid = Column(Integer, ForeignKey("modules.moduleid"), nullable=False)
    startdate = Column(data_type="timestamp")
    enddate = Column(data_type="timestamp")
    frequencydays = Column(Integer, nullable=False)
