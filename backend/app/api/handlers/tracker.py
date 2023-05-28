from fastapi import APIRouter, HTTPException, status
from fastapi import Depends
import pymongo
from typing import List
from datetime import datetime, timedelta

from app.models.tracker_model import Tracker
from app.models.user_model import User
from app.api.deps.user_deps import get_current_user
from app.schemas.tracker_schema import TrackerCreate, TrackerOut
from app.services.tracker_service import TrackerService 

tracker_router = APIRouter()

@tracker_router.get('/', summary="get all daily tracking of the user", response_model=List[TrackerOut])
async def list(current_user: User = Depends(get_current_user)):
    return await TrackerService.list_trackers(current_user)

@tracker_router.post('/create', summary="insert new tracking", response_model=Tracker)
async def create_tracker(data: TrackerCreate, current_user: User = Depends(get_current_user)):
    return await TrackerService.create_tracker(current_user, data)

@tracker_router.get('/calories-burnt-weekly', summary="get weekly calorie data", response_model=List[TrackerOut])
async def get_weekly_calorie_burnt(current_user: User = Depends(get_current_user)):
    today = datetime.now()
    past_week = today - timedelta(days=7)
    return await TrackerService.get_trackers_between_dates(current_user, past_week, today)
