import React, { useState, useEffect, useRef }  from 'react'
;import threedots from '../../icons/threedots.png'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import '../../style/dashboard/profile.css'
import Modal from '@mui/material/Modal'
import placeholder from '../../icons/placeholder.png'

import axiosInstance from "../../services/axios"

  
function Profile() {
    const [userData, setUserData] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [image, setImage] = useState(null);
    const inputRef = useRef(null);
    // const [open, setOpen] = React.useState(false);
    const [stretchData, setStretchData] = useState([]);
    const [openModal, setOpenModal] = useState(null);

    const handleOpenModal = (index) => {
        setOpenModal(index);
      };
    
      const handleCloseModal = () => {
        setOpenModal(null);
      };

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
              if(response.data.size == 0){
                setImage(placeholder)
              }

              else{
                setImage(URL.createObjectURL(response.data));
                console.log(response.data)
              }
            })
            .catch((error) => {
                console.error(error);
            })
          };

          const fetchStretch = async () => {
            fetch(
              `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=stretching`,
              {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': '56c7c883b6mshb1c37cf73d9bda0p1b1d9fjsnf6f043ae789a',
                  'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
                }
              }
            )
              .then((response) => response.json())
              .then((data) => {
                const firstThree = data.slice(0, 3);
                setStretchData(firstThree);
                console.log(firstThree);
              })
              .catch(() => {
                console.log("error");
              });
        };
      
        fetchData();
        fetchImage();
        fetchStretch();
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

            <h2  className='profsetuph2'>Daily Stretches</h2> 

            {stretchData.map((stretch, index) => (
            <div className="stretchitem1" key={index}>
                <div className="tripledotcont">
                <h2 className="stretchitemtitle">{stretch.name}</h2>
                <img src={threedots} onClick={() => handleOpenModal(index)} alt="Three dots" />
                <Modal
                    open={openModal === index}
                    onClose={() => handleCloseModal(index)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div className="modalwhole">
                    <div className="modalwhiteframe">
                        <h2 className="stretchtitle">{stretch.name}</h2>
                        <div className="stretchdetails">
                        <div className="leftstretchmodaltop">
                            <div className="stretchdetailitemtop">
                            <h2 className="stretchdetailcat">Type: </h2>
                            <h2 className="stretchdetail-generated">Stretching</h2>
                            </div>
                            <div className="stretchdetailitembottom">
                            <h2 className="stretchdetailcat">Muscle: </h2>
                            <h2 className="stretchdetail-generated">{stretch.muscle}</h2>
                            </div>
                        </div>
                        <div className="rightstretchmodaltop">
                            <div className="stretchdetailitemtop">
                            <h2 className="stretchdetailcat">Equipment: </h2>
                            <h2 className="stretchdetail-generated">{stretch.equipment}</h2>
                            </div>
                            <div className="stretchdetailitembottom">
                            <h2 className="stretchdetailcat">Difficulty: </h2>
                            <h2 className="stretchdetail-generated">{stretch.difficulty}</h2>
                            </div>
                        </div>
                        </div>
                        <div className="instructioncont">
                        <h2 className="instructiondesc">Instructions: </h2>
                        <h2 className="instruction-generated">{stretch.instructions}</h2>
                        </div>
                    </div>
                    </div>
                </Modal>
                </div>
                <div className='bottomtitle'>
                    <h2 className="stretchmuscle">{stretch.muscle}</h2>                 
                    <h2 className='stretchlevel'>{stretch.difficulty}</h2>                 
                </div>
            </div>
            ))}

        </div>
        
        
    </div>
  )
}

export default Profile