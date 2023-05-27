import React, { useState }  from 'react'
;import threedots from '../../icons/threedots.png'
import profilepic from '../../icons/profilepic.png'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


function Profile() {
  return (
    <div style={{height:"100%"}}>
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
            <h2 style={{color: '#531EB7', fontSize:'130%', paddingLeft:10 ,marginTop:'-2%'}}>Profile</h2> 
            <div className='profpic' style={{marginTop:"-20px",marginBottom:"26px",marginLeft:"auto", marginRight:"auto", display:"flex", justifyContent:"center", borderRadius:"100px",alignItems:"center"}}>
                <img src={profilepic} height={200} borderRadius={"100px"} ></img>
            </div>
            
            <h2 style={{textAlign:"center",color: 'black', fontSize:"160%", paddingLeft:10 ,marginTop:'-3%'}}> Kang Haerin</h2> 
            <h2 style={{textAlign:"center",color: '#E78203', fontSize:'120%', paddingLeft:10 ,marginTop:'-5%'}}>@hae_tokki</h2> 
            <div className='line' style={{backgroundColor:"#B2BBAA", width:"100%", height:"1px", marginBottom:"10px",marginLeft:"auto", marginRight:"auto"}}></div>
            <div className='personalinfo' style={{display:"flex",justifyContent:"center", alignItems:"center", gap:"40px",marginLeft:"auto", marginRight:"auto" }}>
                <div className='infoitem' style={{marginTop:"10px", display:"flex-inline", justifyContent:"center", alignItems:"center"}}>
                    <h2 style={{color: '#531EB7', fontSize:"140%",marginTop:'0%'}}>59 kg</h2> 
                    <h2 style={{color: 'black', fontSize:"100%",marginTop:'-10px'}}>Weight</h2> 
                </div>
                <div className='divline' style={{backgroundColor:"#B2BBAA", width:"1px", height:"60px"}}></div>
                <div className='infoitem' style={{marginTop:"10px",display:"flex-inline", justifyContent:"center", alignItems:"center"}}>
                    <h2 style={{color: '#531EB7', fontSize:"140%",marginTop:'0%'}}>165 cm</h2> 
                    <h2 style={{color: 'black', fontSize:"100%", marginTop:'-10px'}}>Height</h2> 
                </div>
                <div className='divline' style={{backgroundColor:"#B2BBAA", width:"1px", height:"60px"}}></div>
                <div className='infoitem' style={{marginTop:"10px",display:"flex-inline", justifyContent:"center", alignItems:"center"}}>
                    <h2 style={{color: '#531EB7', fontSize:"140%", marginTop:'0%'}}>16</h2> 
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