from database import Base
from sqlalchemy import Column, Integer, String, Boolean

class Notifications(Base):
    __tablename__ = "notifications"
    notificationid = Column(Integer, primary_key=True, index=True)
    userid = Column(Integer, nullable=False)
    message = Column(String, nullable=False)
    isread = Column(Boolean)
    createdat = Column(data_type="timestamp")