from datetime import datetime
from pathlib import Path
from typing import Optional

from database import get_db
from dotenv import load_dotenv
from fastapi import APIRouter, HTTPException, Depends, status
from pydantic import BaseModel
from schemas.testquestions import TestQuestions
from sqlalchemy.orm import Session

db_connection = get_db()

env_path = Path('../../../../Downloads/update2/routers') / '.env'
load_dotenv(dotenv_path=env_path)

router = APIRouter()


class TestQuestionsCreate(BaseModel):
    moduleid: int


questiontext: str
createdat: datetime
updatedat: Optional[datetime] = None


@router.post("/testquestions")
def create_testquestions(questions: TestQuestionsCreate, db: Session = Depends(get_db)):
    db_test_question = TestQuestions(moduleid=question.moduleid, questiontext=question.questiontext,
                                     createdat=question.createdat)
    db.add(db_test_question)
    db.commit()
    return complete


class TestQuestionUpdate(BaseModel):
    questiontext: Optional[str] = None


@router.put("/testquestions/{question_id}")
def update_test_question(question_id: int, question: TestQuestionUpdate, db: Session = Depends(get_db)):
    db_test_question = db.query(TestQuestions).filter(TestQuestions.questionid == question_id).first()
    if not db_test_question:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Question not found")

    if question.questiontext is not None:
        db_test_question.questiontext = question.questiontext

    db_test_question.updatedat = datetime.now()

    db.commit()
    return {"detail": "Question updated successfully"}


class TestQuestionGet(BaseModel):
    questionid: int
    moduleid: int
    questiontext: str
    createdat: datetime
    updatedat: datetime


# get questions for a specific module
@router.get("/modules/{module_id}/testquestions")
def get_module_test_questions(module_id: int, db: Session = Depends(get_db)):
    questions = db.query(TestQuestions).filter(TestQuestions.moduleid == module_id).all()
    return questions


# get a specific question by question ID
@router.get("/testquestions/{question_id}")
def get_test_question(question_id: int, db: Session = Depends(get_db)):
    question = db.query(TestQuestions).filter(TestQuestions.questionid == question_id).first()
    if not question:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Question not found")
    return question
