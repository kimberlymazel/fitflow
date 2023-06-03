from typing import Optional
from uuid import UUID
from app.schemas.user_schema import UserAuth
from app.models.user_model import User
from app.core.security import get_password, verify_password
import pymongo
from fastapi import APIRouter, HTTPException, status, UploadFile, File
from bson import Binary

from app.schemas.user_schema import UserUpdate

# add name
class UserService:
    @staticmethod
    async def create_user(user: UserAuth):
        user_in = User(
            username=user.username,
            email=user.email,
            hashed_password=get_password(user.password),
            first_name=user.first_name,
            last_name=user.last_name,
            age=user.age,
            weight=user.weight,
            height=user.height,
            cardio_goal=user.cardio_goal,
            calorie_goal=user.calorie_goal
        )
        await user_in.save()
        return user_in
    
    @staticmethod
    async def authenticate(email: str, password: str) -> Optional[User]:
        user = await UserService.get_user_by_email(email=email)
        if not user:
            return None
        if not verify_password(password=password, hashed_pass=user.hashed_password):
            return None
        
        return user
    
    @staticmethod
    async def get_user_by_email(email: str) -> Optional[User]:
        user = await User.find_one(User.email == email)
        return user
    
    @staticmethod
    async def get_user_by_id(id: UUID) -> Optional[User]:
        user = await User.find_one(User.user_id == id)
        return user
    
    @staticmethod
    async def update_user(id: UUID, data: UserUpdate) -> User:
        user = await User.find_one(User.user_id == id)
        if not user:
            raise pymongo.errors.OperationFailure("User not found")
    
        await user.update({"$set": data.dict(exclude_unset=True)})
        return user

    @staticmethod
    async def user_image_upload(id: UUID, profile_picture: UploadFile = File(...)):
        user = await User.find_one(User.user_id == id)
        if user:
            image_data = await profile_picture.read()
            binary_image_data = Binary(image_data)
            await user.update({"$set": {"profile_picture": binary_image_data}})
            return user
        else:
            return {"message": "User not found"}