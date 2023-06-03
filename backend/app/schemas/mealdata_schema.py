from uuid import UUID
from pydantic import BaseModel, Field
from typing import Optional, List

class Meal(BaseModel):
    id: int
    imageType: str
    title: str
    readyInMinutes: int
    servings: int
    sourceUrl: str

class Nutrients(BaseModel):
    calories: float
    carbohydrates: float
    fat: float
    protein: float

class MealDataOut(BaseModel):
    meals: List[Meal]
    nutrients: Nutrients