import React, { useState, useEffect, useRef }  from 'react'
;import threedots from '../../icons/threedots.png'
import profilepic from '../../icons/profilepic.png'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

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
    <div style={{height:"100%", maxWidth:"100%"}}>
        <div
            style={{
                background: '#FFFFFF',
                borderColor:"F6F6F4",
                boxShadow:"2px 2px 2px 3px rgba(199, 201, 198)",
                width: "70%",
                maxHeight: "90%",
                display: 'flex-inline',
                alignSelf: 'right',
                alignItems: 'center',
                borderRadius: 20,
                margin:"5% 10% 5% 10%",
                padding:"5% 5% 10% 5%",
                overflow:"hidden"
            }}
        >   
            <div style={{display:"flex", gap:"space-between" }}>
                <h2 style={{color: '#531EB7', fontSize:'130%', paddingLeft:10 ,marginTop:'-2%', width:"80%"}}>Profile</h2> 
                <div className='uploadprofpicbtncontainer' style={{marginTop:'-2%'}}>
                        <button className='uploadprofpicbtn' style={{backgroundColor:"#531EB7", color:"white",fontSize:"13px", border:"none", borderRadius:"5px", boxShadow:"1px 2px 1px 1px lightgrey", padding:"5px 20px 5px 20px"}} onClick={handleProfilePictureUpload}>Upload</button>
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
                    style={{
                        marginTop:"-20px",
                        marginBottom:"26px",
                        marginLeft:"auto",
                        marginRight:"auto", display:"flex",
                        justifyContent:"center",
                        borderradius:"100px",
                        alignItems:"center"
                        }}
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
            
            <h2 style={{textAlign:"center",color: 'black', fontSize:"160%", paddingLeft:10 ,marginTop:'-3%'}}> {userData.first_name} {userData.last_name}</h2> 
            <h2 style={{textAlign:"center",color: '#E78203', fontSize:'120%', paddingLeft:10 ,marginTop:'-15px'}}>@{userData.username}</h2> 
            <div className='line' style={{backgroundColor:"#B2BBAA", width:"100%", height:"1px", marginBottom:"10px",marginLeft:"auto", marginRight:"auto"}}></div>
            <div className='personalinfo' style={{display:"flex",justifyContent:"center", alignItems:"center", gap:"40px",marginLeft:"auto", marginRight:"auto" }}>
                <div className='infoitem' style={{marginTop:"10px", display:"flex-inline", justifyContent:"center", alignItems:"center"}}>
                    <h2 style={{color: '#531EB7', fontSize:"140%",marginTop:'0%'}}>{userData.weight} kg</h2> 
                    <h2 style={{color: 'black', fontSize:"100%",marginTop:'-10px'}}>Weight</h2> 
                </div>
                <div className='divline' style={{backgroundColor:"#B2BBAA", width:"1px", height:"60px"}}></div>
                <div className='infoitem' style={{marginTop:"10px",display:"flex-inline", justifyContent:"center", alignItems:"center"}}>
                    <h2 style={{color: '#531EB7', fontSize:"140%",marginTop:'0%'}}>{userData.height} cm</h2> 
                    <h2 style={{color: 'black', fontSize:"100%", marginTop:'-10px'}}>Height</h2> 
                </div>
                <div className='divline' style={{backgroundColor:"#B2BBAA", width:"1px", height:"60px"}}></div>
                <div className='infoitem' style={{marginTop:"10px",display:"flex-inline", justifyContent:"center", alignItems:"center"}}>
                    <h2 style={{color: '#531EB7', fontSize:"140%", marginTop:'0%'}}>{userData.age}</h2> 
                    <h2 style={{color: 'black', fontSize:"100%", marginTop:'-10px'}}>Age</h2> 
                </div>
            </div>
            <div className='line' style={{backgroundColor:"#B2BBAA", width:"100%", height:"1px",marginTop:"10px", marginBottom:"10px",marginLeft:"auto", marginRight:"auto"}}></div>
            <h2 style={{color: '#531EB7', fontSize:'130%', paddingLeft:10 ,marginTop:'6%', marginBottom:"-10px"}}>Calendar</h2> 
            <div className='calendar' style={{marginLeft:"0px",marginRight:"20px", color:"black", marginBottom:"-40px"}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar />
                </LocalizationProvider>
            </div>
            <h2 style={{color: '#531EB7', fontSize:'130%', paddingLeft:10 ,marginTop:'6%', marginBottom:"-10px"}}>Schedules</h2> 
            <div className='scheduleitem' style={{width:"95%", margin:"20px 10px 10px 0px", backgroundColor:"#F2ECFF",borderRadius:"10px" ,padding:"10px 0px 20px 10px"}}>
                <div className='title' style={{display:"flex"}}>
                    <h2 style={{color: 'black', fontSize:'120%', paddingLeft:10 ,marginTop:'0px' , width:"85%",marginBottom:"-10px"}}>Beginners Yoga Class</h2> 
                    <img src={threedots}></img>
                </div>
                <div className='bottomtitle' style={{display:"flex"}}>
                    <h2 style={{color: '#E78203', fontSize:'110%', paddingLeft:10, width:"72%",marginTop:'5px' , marginBottom:"-10px"}}>Fitness</h2>                 
                    <h2 style={{color: '#E78203', fontSize:'110%', paddingLeft:10 ,marginTop:'5px' , marginBottom:"-10px"}}>13 June</h2>                 
                </div>
            </div>
            <div className='scheduleitem' style={{width:"95%", margin:"20px 10px 0px 0px", backgroundColor:"#F2ECFF",borderRadius:"10px" ,padding:"10px 0px 20px 10px"}}>
                <div className='title' style={{display:"flex"}}>
                    <h2 style={{color: 'black', fontSize:'120%', paddingLeft:10 ,marginTop:'0px' , width:"85%",marginBottom:"-10px"}}>At Home Workouts</h2> 
                    <img src={threedots}></img>
                </div>
                <div className='bottomtitle' style={{display:"flex"}}>
                    <h2 style={{color: '#E78203', fontSize:'110%', paddingLeft:10, width:"72%",marginTop:'5px' , marginBottom:"-10px"}}>Fitness</h2>                 
                    <h2 style={{color: '#E78203', fontSize:'110%', paddingLeft:10 ,marginTop:'5px' , marginBottom:"-10px"}}>16 June</h2>                 
                </div>           
             </div>
        </div>
        
        
    </div>
  )
}

export default Profile