from datetime import datetime
from uuid import UUID, uuid4
from beanie import Document, Indexed, Link, Replace, Insert
from pydantic import BaseModel, Field
from typing import List
from .user_model import User

class Meal(BaseModel):
    id: int
    imageType: str
    title: str
    readyInMinutes: int
    servings: int
    # sourceUrl: str

class Nutrients(BaseModel):
    calories: float
    carbohydrates: float
    fat: float
    protein: float

class MealData(Document):
    # meal_id: UUID = Field(default_factory=uuid4, unique=True)
    # date: datetime = Field(default_factory=datetime.utcnow)
    meals: List[Meal]
    nutrients: Nutrients
    owner: Link[User]

    class Settings:
        name = "mealdata"
