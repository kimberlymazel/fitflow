from uuid import UUID
from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional

class TrackerCreate(BaseModel):
    calories_burnt: float
    calories_consumed: float
    mood: Optional[int] = None
    hours_slept: int
    water_drank: int
    steps_taken: int

class TrackerOut(BaseModel):
    tracker_id: UUID
    date: datetime
    calories_burnt: float
    calories_consumed: float
    mood: Optional[int] = None
    hours_slept: int
    water_drank: int
    steps_taken: int