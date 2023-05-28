from typing import Optional, List
from uuid import UUID
import pymongo
from datetime import datetime, timedelta
from bson import DBRef

from app.schemas.tracker_schema import TrackerCreate
from app.models.tracker_model import Tracker
from app.models.user_model import User

class TrackerService:
    # post
    @staticmethod
    async def create_tracker(user: User, data: TrackerCreate) -> Tracker:
        tracker = Tracker(**data.dict(), owner=user)
        return await tracker.insert()

    # get all data
    @staticmethod
    async def list_trackers(user: User) -> List[Tracker]:
        trackers = await Tracker.find(Tracker.owner.id == user.id).to_list()
        return trackers

    @staticmethod
    async def get_trackers_between_dates(user: User, past_week: datetime, today: datetime) -> List[Tracker]:
        owner_ref = DBRef('users', user.id)
        trackers = await Tracker.find({"owner": owner_ref, "date": {"$gte": past_week, "$lte": today}}).to_list()
        return trackers