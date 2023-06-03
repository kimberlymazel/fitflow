from fastapi import APIRouter, HTTPException, status
from fastapi import Depends
import pymongo
from typing import List
from datetime import datetime, timedelta

from app.models.mealdata_model import MealData
from app.models.user_model import User
from app.api.deps.user_deps import get_current_user
from app.schemas.mealdata_schema import MealDataOut
from app.services.mealdata_service import MealService 

mealdata_router = APIRouter()

@mealdata_router.post('/save-meal-plan', summary="insert new meal plan", response_model=MealDataOut)
async def save_mealdata(data: MealDataOut, current_user: User = Depends(get_current_user)):
    return await MealService.create_meal(current_user, data)

@mealdata_router.get('/get-meal-plan', summary="retrieve meal plan", response_model=MealDataOut)
async def get_mealdata(current_user: User = Depends(get_current_user)):
    return await MealService.retrieve_meal(current_user)