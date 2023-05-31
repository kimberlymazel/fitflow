import React, { useState, useEffect, useRef }  from 'react'
;import threedots from '../../icons/threedots.png'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import '../../style/dashboard/profile.css'

import axiosInstance from "../../services/axios";

function Profile() {
    const [userData, setUserData] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [image, setImage] = useState(null);
    const inputRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            axiosInstance
            .get('/users/me')
            .then((response) => {
                setUserData(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
        };

        const fetchImage = async () => {
            axiosInstance
            .get('/users/image', {
                responseType: "blob",
            })
            .then((response) => {
                setImage(URL.createObjectURL(response.data));
                console.log(response.data)
            })
            .catch((error) => {
                console.error(error);
            })
          };
      
        fetchData();
        fetchImage();
      }, []);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
      };

    const handleProfilePictureUpload = () => {
        if (selectedImage) {
          const formData = new FormData();
          formData.append('profile_picture', selectedImage);
    
          axiosInstance
            .post('/users/image', formData)
            .then((response) => {
              // Handle successful upload
              console.log('Profile picture uploaded:', response.data);
              setImage(URL.createObjectURL(selectedImage));
            })
            .catch((error) => {
              // Handle upload error
              console.error('Error uploading profile picture:', error);
            });
        }
      };
    
    return (
    <div className="profilewholecont">
        <div className='profilewhole' style={{display: 'flex-inline'}}>   
            <div className='profilepicsetupcont' style={{gap:"space-between" }}>
                <h2 className="profsetuph2-prof">Profile</h2> 
                <div className='uploadprofpicbtncontainer'>
                        <button className='uploadprofpicbtn' onClick={handleProfilePictureUpload}>Upload</button>
                </div>
            </div>
            
            {/* profile pic */}
            <div>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                    ref={inputRef}
                />
                <div 
                    className='profpic'
                    onClick={() => inputRef.current.click()}
                    >
                    <img
                        src={image}
                        height={200}
                        width={200}
                        style={{ borderRadius: "100%" }}
                        alt="Profile" 
                    />
                </div>
            </div>
            
            <h2 className="userfirstlastname"> {userData.first_name} {userData.last_name}</h2> 
            <h2 className="user-username">@{userData.username}</h2> 
            <div className='line'></div>
            <div className='personalinfo'>
                <div className='infoitem'>
                    <h2 className="unitpurpletitle">{userData.weight} kg</h2> 
                    <h2 className="infoitemdesc">Weight</h2> 
                </div>
                <div className='divline'></div>
                <div className='infoitem'>
                    <h2 className="unitpurpletitle">{userData.height} cm</h2> 
                    <h2 className="infoitemdesc">Height</h2> 
                </div>
                <div className='divline'></div>
                <div className='infoitem'>
                    <h2 className="unitpurpletitle">{userData.age}</h2> 
                    <h2 className="infoitemdesc">Age</h2> 
                </div>
            </div>
            <div className='line'></div>
            <h2 className='profsetuph2'>Calendar</h2> 
            <div className='calendar'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar />
                </LocalizationProvider>
            </div>

            <h2  className='profsetuph2'>Schedules</h2> 
            <div className='scheduleitem1'>
                <div className='tripledotcont'>
                    <h2 className="scheduleitemtitle">Beginners Yoga Class</h2> 
                    <img src={threedots}></img>
                </div>
                <div className='bottomtitle'>
                    <h2 className="scheditemcategory">Fitness</h2>                 
                    <h2 className='scheditemdate'>13 June</h2>                 
                </div>
            </div>
            <div className='scheduleitem2'>
                <div className='tripledotcont'>
                    <h2 className="scheduleitemtitle">At Home Workouts</h2> 
                    <img src={threedots}></img>
                </div>
                <div className='bottomtitle'>
                    <h2 className="scheditemcategory">Fitness</h2>                 
                    <h2 className='scheditemdate'>16 June</h2>                 
                </div>           
             </div>
        </div>
        
        
    </div>
  )
}

export default Profile