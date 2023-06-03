from uuid import UUID
from pydantic import BaseModel, Field
from typing import Optional, List

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

class MealDataOut(BaseModel):
    meals: List[Meal]
    nutrients: Nutrients