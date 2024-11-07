from database import Base
from sqlalchemy import Column, Integer, String, Boolean

class Modulescheduling(Base):
    __tablename__ = "modulescheduling"
    scheduleid = Column(Integer, primary_key=True, index=True)
    moduleid = Column(Integer, nullable=False)
    startdate = Column(data_type="timestamp")
    enddate = Column(data_type="timestamp")
    frequencydays = Column(Integer, nullable=False)