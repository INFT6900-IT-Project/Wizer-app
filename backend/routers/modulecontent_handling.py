from datetime import datetime
from datetime import datetime
from pathlib import Path
from typing import Optional

from database import get_db
from dotenv import load_dotenv
from fastapi import APIRouter, HTTPException, Depends, status
from pydantic import BaseModel, HttpUrl
from schemas.modulecontent import ModuleContent
from sqlalchemy.orm import Session

db_connection = get_db()

env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)

router = APIRouter()


class ModuleContentCreate(BaseModel):
    moduleid: int
    contenttype: str
    contenturl: HttpUrl
    createdat: datetime


updatedat: Optional[datetime] = None


@router.post("/content")
def create_module_content(modulecontent: ModuleContentCreate, db: Session = Depends(get_db)):
    db_modulecontent = ModuleContent(moduleid=modulecontent.moduleid, contenttype=modulecontent.contenttype,
                                     contenturl=modulecontent.contenturl,
                                     createdat=modulecontent.createdat, updatedat=modulecontent.updatedat)
    db.add(db_modulecontent)


    db.commit()
    return "complete"


class ModuleContentUpdate(BaseModel):
    contenttype: Optional[str] = None


    contenturl: Optional[HttpUrl] = None


@router.post("/content/{content_id}")
def update_module_content(content_id: int, modulecontent: ModuleContentUpdate, db: Session = Depends(get_db)):
    db_modulecontent = db.query(ModuleContent).filter(ModuleContent.contentid == content_id).first()
    if not db_modulecontent:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Module content not found")
    if modulecontent.contenttype is not None:
        db_modulecontent.contenttype = modulecontent.contenttype


    if modulecontent.contenturl is not None:
        db_modulecontent.contenturl = modulecontent.contenturl

        db_modulecontent.updatedat = datetime.now()
        db.commit()
        return {"detail": "Module content updated successfully"}


# Get module content by contentID
@router.get("/content/{content_id}")
def get_module_content(content_id: int, db: Session = Depends(get_db)):
    db_modulecontent = db.query(ModuleContent).filter(ModuleContent.contentid == content_id).first()
    if not db_modulecontent:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Module content not found")

    return db_modulecontent
