from typing import Optional
from uuid import UUID
from pydantic import BaseModel
from pydantic import Field, EmailStr

class UserAuth(BaseModel):
    email: EmailStr = Field(..., description="user email")
    username: str = Field(..., min_length=5, max_length=50, description="user username")
    password: str = Field(..., min_length=5, max_length=24, description="user password")
    weight: Optional[float] = None
    height: Optional[float] = None
    cardio_goal: Optional[int] = None
    calorie_goal: Optional[float] = None

class UserOut(BaseModel):
    user_id: UUID
    username: str
    email: EmailStr
    first_name: Optional[str]
    last_name: Optional[str]
    disabled: Optional[bool] = False
    weight: Optional[float] = None
    height: Optional[float] = None
    cardio_goal: Optional[int] = None
    calorie_goal: Optional[float] = None

class UserUpdate(BaseModel):
    email: Optional[EmailStr] = None
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    weight: Optional[float] = None
    height: Optional[float] = None
    cardio_goal: Optional[int] = None
    calorie_goal: Optional[float] = None