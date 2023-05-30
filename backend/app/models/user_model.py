from typing import Optional
from datetime import datetime
from uuid import UUID, uuid4
from beanie import Document, Indexed
from pydantic import Field, EmailStr, validator

class User(Document):
    arbitrary_types_allowed = True

    user_id: UUID = Field(default_factory=uuid4)
    username: Indexed(str, unique=True)
    email: Indexed(EmailStr, unique=True)
    hashed_password: str
    first_name: Optional[str] = None 
    last_name: Optional[str] = None
    age: Optional[int] = None 
    weight: Optional[float] = None
    height: Optional[float] = None
    cardio_goal: Optional[int] = None
    calorie_goal: Optional[float] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    disabled: Optional[bool] = None
    profile_picture: Optional[bytes] = None
    
    
    def __repr__(self) -> str:
        return f"<User {self.email}>"

    def __str__(self) -> str:
        return self.email

    def __hash__(self) -> int:
        return hash(self.email)

    def __eq__(self, other: object) -> bool:
        if isinstance(other, User):
            return self.email == other.email
        return False
    
    @property
    def create(self) -> datetime:
        return self.id.generation_time
    
    @classmethod
    async def by_email(self, email: str) -> "User":
        return await self.find_one(self.email == email)

    class Settings:
        name = "users"