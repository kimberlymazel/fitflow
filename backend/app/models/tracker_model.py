from typing import Optional
from datetime import datetime
from uuid import UUID, uuid4
from beanie import Document, Indexed, Link, before_event, Replace, Insert
from pydantic import Field
from .user_model import User

class Tracker(Document):
    tracker_id: UUID = Field(default_factory=uuid4, unique=True)
    date: datetime = Field(default_factory=datetime.utcnow)
    calories_burnt: float = None
    calories_consumed: float = None
    mood: Optional[int] = None
    hours_slept: int = None
    water_drank: int = None
    steps_taken: int = None
    owner: Link[User]

    def __eq__(self, other: object) -> bool:
        if isinstance(other, Tracker):
            return self.tracker_id == other.tracker_id
        return False

    class Settings:
        name = "tracker"