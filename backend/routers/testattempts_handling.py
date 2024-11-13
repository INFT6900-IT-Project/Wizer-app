from datetime import datetime
from pathlib import Path
from typing import Optional

from database import get_db
from dotenv import load_dotenv
from fastapi import APIRouter, HTTPException, Depends, status
from pydantic import BaseModel
from schemas.testattempts import TestAttempts
from sqlalchemy.orm import Session

db_connection = get_db()

env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)

router = APIRouter()


class TestAttemptCreate(BaseModel):
    userid: int
    moduleid: int
    attemptdate: datetime = datetime.utcnow()


@router.post("/testattempts", tags=["TestAttempt"])
def create_test_attempt(attempt: TestAttemptCreate, db: Session = Depends(get_db)):
    db_test_attempt = TestAttempts(userid=attempt.userid, moduleid=attempt.moduleid, attemptdate=attempt.attemptdate)
    db.add(db_test_attempt)
    db.commit()
    return "complete"


class TestAttemptUpdate(BaseModel):
    score: Optional[float] = None
    ispassed: Optional[bool] = None


@router.put("/testattempts/{attempt_id}", tags=["TestAttempt"])
def update_test_attempt(attempt_id: int, attempt: TestAttemptUpdate, db: Session = Depends(get_db)):
    db_test_attempt = db.query(TestAttempts).filter(TestAttempts.attemptid == attempt_id).first()
    if not db_test_attempt:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Attempt not found")

    if attempt.score is not None:
        db_test_attempt.score = attempt.score
    if attempt.ispassed is not None:
        db_test_attempt.ispassed = attempt.ispassed

    db.commit()
    return db_test_attempt


class TestAttemptsGet(BaseModel):
    attemptid: int
    userid: int
    moduleid: int
    attemptdate: datetime
    score: Optional[float]
    ispassed: bool


@router.get("/testattempts/{attempt_id}", tags=["TestAttempt"])
def get_test_attempt(attempt_id: int, db: Session = Depends(get_db)):
    attempt = db.query(TestAttempts).filter(TestAttempts.attemptid == attempt_id).first()
    if not attempt:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Attempt not found")
    return attempt
