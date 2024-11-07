from database import Base
from sqlalchemy import Column, Integer, String, Boolean

class Modulecontent(Base):
    __tablename__ = "modulecontent"
    contentid = Column(Integer, primary_key=True, index=True)
    moduleid = Column(Integer, index=True, nullable=False)
    contenttype = Column(String)
    contenturl = Column(Integer)
    createdat = Column(data_type="timestamp")
    updatedat = Column(data_type="timestamp")