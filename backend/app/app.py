from beanie import init_beanie
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient

from app.api.router import router
from app.core.config import settings
from app.models.user_model import User
from app.models.tracker_model import Tracker
from app.models.mealdata_model import MealData

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def app_init():
    """
        initialize crucial application services
    """
    
    db_client = AsyncIOMotorClient(settings.MONGO_CONNECTION_STRING).fitflow
    
    await init_beanie(
        database=db_client,
        document_models= [
            User,
            Tracker,
            MealData
        ]
    )
    
app.include_router(router, prefix=settings.API_V1_STR)