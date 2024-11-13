import os
from datetime import datetime
from pathlib import Path
from typing import Optional

from azurestorage import AzureFileStorage
from database import get_db
from dotenv import load_dotenv
from fastapi import APIRouter, HTTPException, Depends, status, File, UploadFile
from pydantic import BaseModel, HttpUrl
from schemas.modulecontent import ModuleContent
from sqlalchemy.orm import Session

db_connection = get_db()

env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)

azure_blob = AzureFileStorage()

router = APIRouter()


class ModuleContentCreate(BaseModel):
    moduleid: int
    contenttype: str
    createdat: datetime = datetime.now()
    file: UploadFile = File(...)


@router.post("/content")
async def create_module_content(modulecontent: ModuleContentCreate = Depends(),
                                file: UploadFile = File(...),
                                db: Session = Depends(get_db)):
    try:
        # Save file to a temp location
        temp_path = f"/tmp/{file.filename}"
        with open(temp_path, "wb") as temp_file:
            temp_file.write(file.file.read())

            # Upload to the correct Azure Storage container
            file_url = azure_blob.upload_file(temp_path)

            # Remove the temp file
            os.remove(temp_path)

            db_modulecontent = ModuleContent(moduleid=modulecontent.moduleid, contenttype=modulecontent.contenttype,
                                             contenturl=file_url,
                                             createdat=modulecontent.createdat)
            db.add(db_modulecontent)
            db.commit()
        return {"message": "Module content added successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"File upload failed: {str(e)}")


class ModuleContentUpdate(BaseModel):
    contenttype: Optional[str] = None
    contenturl: Optional[HttpUrl] = None


@router.post("/content/{content_id}")
async def update_module_content(content_id: int, modulecontent: ModuleContentUpdate, db: Session = Depends(get_db)):
    db_modulecontent = db.query(ModuleContent).filter(ModuleContent.contentid == content_id).first()
    if not db_modulecontent:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Module content not found")
    if modulecontent.contenttype is not None:
        db_modulecontent.contenttype = modulecontent.contenttype
    if modulecontent.contenturl is not None:
        db_modulecontent.contenturl = modulecontent.contenturl

    db_modulecontent.updatedat = datetime.utcnow()
    db.commit()
    return {"message": "Module content updated successfully"}


# Get module content by contentID
@router.get("/content/{content_id}")
def get_module_content(content_id: int, db: Session = Depends(get_db)):
    db_modulecontent = db.query(ModuleContent).filter(ModuleContent.contentid == content_id).first()
    if not db_modulecontent:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Module content not found")

    return db_modulecontent

@router.delete("/content/{content_id}")
def delete_module_content(content_id: int, db: Session = Depends(get_db)):
    db_modulecontent = db.query(ModuleContent).filter(ModuleContent.contentid == content_id).first()
    if db_modulecontent is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Content not found")

    db.delete(db_modulecontent)
    db.commit()
    return {"detail": "Content deleted successfully"}
