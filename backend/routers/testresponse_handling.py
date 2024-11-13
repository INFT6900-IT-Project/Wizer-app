from pathlib import Path

from database import get_db
from dotenv import load_dotenv
from fastapi import APIRouter, Depends
from pydantic import BaseModel
from schemas.testresponses import TestResponses
from sqlalchemy.orm import Session

db_connection = get_db()

env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)

router = APIRouter()


class TestResponseCreate(BaseModel):
    attemptid: int
    questionid: int
    answerid: int


@router.post("/testresponses", tags=["TestResponse"])
def create_test_response(response: TestResponseCreate, db: Session = Depends(get_db)):
    db_test_response = TestResponses(attemptid=response.attemptid, questionid=response.questionid,
                                     answerid=response.answerid)
    db.add(db_test_response)
    db.commit()
    return "complete"


class TestResponseGet(BaseModel):
    responseid: int
    attemptid: int
    questionid: int
    answerid: int


@router.get("/testattempts/{attempt_id}/responses", tags=["TestResponse"])
def get_test_attempt_responses(attempt_id: int, db: Session = Depends(get_db)):
    responses = db.query(TestResponses).filter(TestResponses.attemptid == attempt_id).all()
    return responses
