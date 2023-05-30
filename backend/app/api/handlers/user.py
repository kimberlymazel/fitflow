from fastapi import APIRouter, HTTPException, status, UploadFile, File
from fastapi import Depends
from fastapi.responses import JSONResponse, StreamingResponse
import pymongo
import io


from app.services.user_service import UserService
from app.schemas.user_schema import UserAuth, UserOut, UserUpdate
from app.models.user_model import User
from app.api.deps.user_deps import get_current_user


user_router = APIRouter()

@user_router.post('/create', summary="Create new user", response_model=UserOut)
async def create_user(data: UserAuth):
    try:
        return await UserService.create_user(data)
    except pymongo.errors.DuplicateKeyError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="User with this email or username already exist"
        )


@user_router.get('/me', summary='Get details of currently logged in user', response_model=UserOut)
async def get_me(user: User = Depends(get_current_user)):

    return user


@user_router.post('/update', summary='Update User', response_model=UserOut)
async def update_user(data: UserUpdate, user: User = Depends(get_current_user)):
    try:
        return await UserService.update_user(user.user_id, data)
    except pymongo.errors.OperationFailure:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="User does not exist"
        )

@user_router.post("/image", summary="upload user profile pic")
async def upload_user_img(user: User = Depends(get_current_user), profile_picture: UploadFile = File(...)):
    await UserService.user_image_upload(user.user_id, profile_picture)
    return JSONResponse(content={"message": "Image uploaded successfully"})

@user_router.get("/image", summary="get user profile pic")
async def get_user_img(user: User = Depends(get_current_user)):
    image_data = await UserService.get_user_by_id(user.user_id)
    if image_data:
        return StreamingResponse(io.BytesIO(image_data.profile_picture), media_type="image/png")
