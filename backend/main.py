import uvicorn
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

# from .dependencies import
from routers import auth, modules_handling

# app = FastAPI(dependencies=[Depends()])
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.exception_handler(HTTPException)
async def http_exception_handler(request: Request, exc: HTTPException):
    return JSONResponse(status_code=exc.status_code, content={"message": exc.detail})


# app.include_router(user_handling.router)
app.include_router(auth.router)
app.include_router(modules_handling.router)
# app.include_router(mfa.router)


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=3000, reload=True)
