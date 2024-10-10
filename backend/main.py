from fastapi import Depends, FastAPI
import uvicorn
# from .dependencies import 
from routers import user_auth

# app = FastAPI(dependencies=[Depends()])
app = FastAPI()

app.include_router(user_auth.router)

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000, reload=True)
