from database import Base
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, DateTime


class Notifications(Base):
    __tablename__ = "notifications"
    notificationid = Column(Integer, primary_key=True, index=True)
    userid = Column(Integer, ForeignKey("users.userid"), nullable=False)
    message = Column(String, nullable=False)
    isread = Column(Boolean)
    createdat = Column(DateTime)
