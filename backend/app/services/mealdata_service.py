from typing import Optional, List
from uuid import UUID
from datetime import datetime
from app.schemas.mealdata_schema import MealDataOut
from app.models.mealdata_model import MealData
from app.models.user_model import User

class MealService:
    # Create Meal Data
    @staticmethod
    async def create_meal(user: User, data: MealDataOut) -> MealData:
        existing_meal = await MealService.retrieve_meal(user)

        if existing_meal:
            existing_meal.meals = data.meals
            existing_meal.nutrients = data.nutrients
            await existing_meal.save()
            return existing_meal
        else:
            meal = MealData(**data.dict(), owner=user)
            return await meal.insert()

    @staticmethod
    async def retrieve_meal(current_user: User) -> Optional[MealData]:
        meal = await MealData.find_one(MealData.owner.id == current_user.id)
        return meal