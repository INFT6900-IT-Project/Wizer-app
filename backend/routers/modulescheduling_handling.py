from datetime import datetime
from pathlib import Path
from typing import Optional

from database import get_db
from dotenv import load_dotenv
from fastapi import APIRouter, HTTPException, Depends, status
from pydantic import BaseModel, Field
from schemas.modulescheduling import ModuleScheduling
from sqlalchemy.orm import Session

db_connection = get_db()

env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)

router = APIRouter()


class ModuleScheduleCreate(BaseModel):
    moduleid: int
    startdate: datetime
    enddate: Optional[datetime] = None
    frecuencydays: int = Field(gt=0)


@router.post("/schedule")
def create_module_schedule(moduleschedule: ModuleScheduleCreate, db: Session = Depends(get_db)):
    db_moduleschedule = ModuleScheduling(moduleid=moduleschedule.moduleid, startdate=moduleschedule.startdate,
                                         enddate=moduleschedule.enddate,
                                         frequencydays=moduleschedule.frequencydays)
    db.add(db_moduleschedule)
    db.commit()
    db.refresh(db_moduleschedule)
    return "complete"


class ModuleScheduleUpdate(BaseModel):
    startdate: Optional[datetime] = None
    enddate: Optional[datetime] = None
    frequencydays: Optional[int] = Field(gt=0)


@router.put("/schedule/{schedule_id}")
def update_module_schedule(moduleschedule_id: int, moduleschedule: ModuleScheduleUpdate, db: Session = Depends(get_db)):
    db_moduleschedule = db.query(ModuleScheduling).filter(ModuleScheduling.scheduleid == moduleschedule_id).first()
    if not db_moduleschedule:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Module schedule not found")

    if moduleschedule.startdate is not None:
        db_moduleschedule.startdate = moduleschedule.startdate
    if moduleschedule.enddate is not None:
        db_moduleschedule.enddate = moduleschedule.enddate
    if moduleschedule.frequencydays is not None:
        db_moduleschedule.frequencydays = moduleschedule.frequencydays

    db.commit()
    db.refresh(db_moduleschedule)
    return {"detail": "Module schedule updated successfully"}


@router.delete("/schedule/{schedule_id}")
def delete_module_schedule(moduleschedule_id: int, db: Session = Depends(get_db)):
    db_moduleschedule = db.query(ModuleScheduling).filter(ModuleScheduling.scheduleid == moduleschedule_id).first()
    if db_moduleschedule is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Schedule not found")

    db.delete(db_moduleschedule)
    db.commit()
    return {"detail": "Schedule deleted successfully"}
