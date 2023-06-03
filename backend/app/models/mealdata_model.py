from datetime import datetime
from uuid import UUID, uuid4
from beanie import Document, Indexed, Link, Replace, Insert
from pydantic import BaseModel, Field
from typing import List, Optional
from .user_model import User

class Meal(BaseModel):
    id: Optional[int] = None
    imageType: Optional[str] = None
    title: Optional[str] = None
    readyInMinutes: Optional[int] = None
    servings: Optional[int]= None
    sourceUrl: Optional[str] = None

class Nutrients(BaseModel):
    calories: Optional[float] = None
    carbohydrates: Optional[float] = None
    fat: Optional[float] = None
    protein: Optional[float] = None

class MealData(Document):
    # meal_id: UUID = Field(default_factory=uuid4, unique=True)
    # date: datetime = Field(default_factory=datetime.utcnow)
    meals: List[Meal]
    nutrients: Nutrients
    owner: Link[User]

    class Settings:
        name = "mealdata"
