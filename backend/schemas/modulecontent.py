from database import Base
from sqlalchemy import Column, Integer, String, ForeignKey


class ModuleContent(Base):
    __tablename__ = "modulecontent"
    contentid = Column(Integer, primary_key=True, index=True)
    moduleid = Column(Integer, ForeignKey("modules.moduleid"), nullable=False)
    contenttype = Column(String)
    contenturl = Column(String, nullable=False)
    createdat = Column(data_type="timestamp")
    updatedat = Column(data_type="timestamp")
