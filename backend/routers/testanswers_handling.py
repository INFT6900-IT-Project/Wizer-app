from pathlib import Path
from typing import Optional

from database import get_db
from dotenv import load_dotenv
from fastapi import APIRouter, HTTPException, Depends, status
from pydantic import BaseModel
from schemas.testanswers import TestAnswers
from sqlalchemy.orm import Session

db_connection = get_db()

env_path = Path('../../../../Downloads/update2/routers') / '.env'
load_dotenv(dotenv_path=env_path)

router = APIRouter()


class TestAnswersCreate(BaseModel):
    questionid: int


answertext: str
iscorrect: Optional[bool] = False


@router.post("/testanswers")
def create_test_answer(answer: TestAnswersCreate, db: Session = Depends(get_db)):
    db_test_answer = TestAnswers(questionid=answer.questionid, answertext=answer.answertext, iscorrect=answer.iscorrect)
    db.add(db_test_answer)
    db.commit()
    return complete


class TestAnswerUpdate(Basemodel):
    answertext: Optional[str] = None
    iscorrect: Optional[bool] = None


@router.put("/testanswers/{answer_id}")
def update_test_answer(answer_id: int, answer: TestAnswerUpdate, db: Session = Depends(get_db)):
    db_test_answer = db.query(TestAnswers).filter(TestAnswers.answerid == answer_id).first()
    if not db_test_answer:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Answer not found")

    if answer.answertext is not None:
        db_test_answer.answertext = answer.answertext
    if answer.iscorrect is not None:
        db_test_answer.iscorrect = answer.iscorrect

    db.commit()
    return {"detail": "Answer updated successfully"}


class TestAnswerGet(BaseModel):
    answerid: int
    questionid: int
    answertext: str
    iscorrect: bool


# Get answer for a specific question
@router.get("/testquestions/{question_id}/answer")
def get_question_answer(question_id: int, db: Session = Depends(get_db)):
    answer = db.query(TestAnswers).filter(TestAnswers.questionid == question_id).all()
    return answer


# Get a specific answer by answer ID
@router.get("/testanswers/{answer_id}")
def get_test_answer(answer_id: int, db: Session = Depends(get_db)):
    answer = db.query(TestAnswers).filter(TestAnswers.answerid == answer_id).first()
    if not answer:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Answer not found")
    return answer
