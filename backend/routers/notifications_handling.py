from datetime import datetime
from pathlib import Path
from typing import Optional

from database import get_db
from dotenv import load_dotenv
from fastapi import APIRouter, HTTPException, Depends, status
from pydantic import BaseModel
from schemas.notifications import Notifications
from sqlalchemy.orm import Session

db_connection = get_db()

env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)

router = APIRouter()


class NotificationCreate(BaseModel):
    userid: int
    message: str
    createdat: datetime = datetime.utcnow()


@router.post("/notifications", tags=["Notifications"])
async def create_notification(notification: NotificationCreate, db: Session = Depends(get_db)):
    db_notification = Notifications(userid=notification.userid, message=notification.message, isread=False,
                                    createdat=notification.createdat)
    db.add(db_notification)
    db.commit()
    return "complete"


class NotificationUpdate(BaseModel):
    isread: Optional[bool] = False


@router.put("/notifications/{notification_id}", tags=["Notifications"])
async def update_notification(notification_id: int, notification: NotificationUpdate, db: Session = Depends(get_db)):
    db_notification = db.query(Notifications).filter(Notifications.notificationid == notification_id).first()
    if not db_notification:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Notification not found")

    if notification.isread is not None:
        db_notification.isread = notification.isread
    db.commit()
    return "complete"


class NotificationGet(BaseModel):
    notificationid: int
    userid: int
    message: str
    isread: bool
    createdat: datetime


@router.get("/notifications/user/{user_id}", tags=["Notifications"])
async def get_user_notifications(user_id: int, db: Session = Depends(get_db)):
    notifications = db.query(Notifications).filter(Notifications.userid == user_id).all()
    return notifications


@router.delete("/notifications/user/{user_id}", tags=["Notifications"])
async def delete_notifications(notification_id: int, db: Session = Depends(get_db)):
    db_notification = db.query(Notifications).filter(Notifications.notificationid == notification_id).first()
    if db_notification is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Notification not found")

    db.delete(db_notification)
    db.commit()
    return {"detail": "Notification deleted successfully"}
