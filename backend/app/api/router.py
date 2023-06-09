from fastapi import APIRouter

from app.api.handlers import user
from app.api.auth.jwt import auth_router
from app.api.handlers import tracker
from app.api.handlers import mealdata

router = APIRouter()

router.include_router(user.user_router, prefix='/users', tags=["users"])
router.include_router(auth_router, prefix='/auth', tags=["auth"])
router.include_router(tracker.tracker_router, prefix='/tracker', tags=["tracker"])
router.include_router(mealdata.mealdata_router, prefix='/mealdata', tags=["mealdata"])