from datetime import datetime
from pathlib import Path

from database import get_db
from dotenv import load_dotenv
from fastapi import APIRouter, HTTPException, Depends, status

from schemas.modules import Modules

from pydantic import BaseModel
from typing import Optional
from sqlalchemy.orm import Session

db_connection = get_db()

env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)

router = APIRouter()


class ModuleCreate(BaseModel):
    modulename: str
    moduledescription: Optional[str] = None
    ownerid: int
    isactive: bool = False
    createdat: datetime
    updatedat: Optional[datetime] = None


@router.post("/modules")
def create_module(module: ModuleCreate, db: Session = Depends(get_db)):
    db_module = Modules(modulename=module.modulename, moduledescription=module.moduledescription,
                        ownerid=module.ownerid,
                        isactive=module.isactive, createdat=module.createdat, updatedat=module.updatedat)
    db.add(db_module)
    db.commit()
    return 'complete'


class ModuleUpdate(BaseModel):
    modulename: Optional[str] = None
    moduledescription: Optional[str] = None
    isactive: Optional[bool] = None
    updatedat: datetime = datetime.now()


@router.put("/modules/{module_id}")
def update_module(module_id: int, module: ModuleUpdate, db: Session = Depends(get_db)):
    db_module = db.query(Modules).filter(Modules.moduleid == module_id).first()
    if not db_module:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Module not found")

    if module.modulename is not None:
        db_module.modulename = module.modulename
    if module.moduledescription is not None:
        db_module.moduledescription = module.moduledescription
    if module.isactive is not None:
        db_module.isactive = module.isactive

    db_module.updatedat = module.updatedat

    db.commit()
    return {"detail": "Module updated successfully"}


@router.delete("/modules/{module_id}")
def delete_module(module_id: int, db: Session = Depends(get_db)):
    db_module = db.query(Modules).filter(Modules.moduleid == module_id).first()
    if db_module is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Module not found")

    db.delete(db_module)
    db.commit()
    return {"detail": "Module deleted successfully"}
