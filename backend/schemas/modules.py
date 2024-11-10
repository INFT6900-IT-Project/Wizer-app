from database import Base
from sqlalchemy import Column, Integer, String, Boolean, Text


class Modules(Base):
    __tablename__ = "modules"
    moduleid = Column(Integer, primary_key=True, index=True)
    modulename = Column(String, nullable=False)
    moduledescription = Column(Text)
    ownerid = Column(Integer, nullable=False)
    isactive = Column(Boolean)
    createdat = Column(data_type="timestamp")
    updatedat = Column(data_type="timestamp")