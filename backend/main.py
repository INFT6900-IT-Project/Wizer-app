import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# from .dependencies import
from routers import user_handling

# app = FastAPI(dependencies=[Depends()])
app = FastAPI()

app.include_router(user_handling.router)

origins = [
    "",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows all origins from the list
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=3000, reload=True)
