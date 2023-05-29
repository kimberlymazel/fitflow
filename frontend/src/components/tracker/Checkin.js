import React, { useState }  from 'react'
import Long from '../cards/Long'
import MoodIcon from '@mui/icons-material/Mood';
import { Button } from '@mui/material';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

import axiosInstance from "../../services/axios";
import { useForm } from "react-hook-form";

export const Checkin = ({
    editable = false,
    defaultValues = {},
    onSuccess = () => {},
    ...rest
}) => {
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting },
      } = useForm({
        defaultValues: { ...defaultValues },
      });

    // const [selectedMood, setSelectedMood] = useState(0)
    // // 1 = very happy, 2 = happy, 3 = fine, 4 = sad, 5 = very sad
    const [sleepData, setSleepData]=useState(0)
    const [waterData, setWaterData]=useState(0)
    const [stepsData, setStepsData]=useState(0)

    // const handleMoodClick = (moodValue) => {
    //     setSelectedMood(moodValue);
    //   };

    const onSubmit = async (values) => {
        try {
            await axiosInstance.post('/tracker/create', values);
            onSuccess();
            reset();
            alert("Daily check-in submitted successfully");
        } catch (err) {
            console.error(err);
          }
    };

  return (
    <div style={{height:"100%", maxWidth:"100%"}}>
        <form
            onSubmit={handleSubmit(onSubmit)}
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
            <h2 style={{color: '#531EB7', fontSize:'160%', paddingLeft:10 ,marginTop:'-2%'}}>Daily check-in</h2> 

            <h2 style={{color: '#531EB7', fontSize:"120%", paddingLeft:10 ,marginTop:'1%'}}>Calories burnt today</h2> 
            <div className='kcalburnt' style={{height:"35px",display:"flex", flexDirection:"row",justifyContent:"space-between", gap:"1px", marginLeft:"10px", marginTop:"0px", boxShadow:"1px 1px 2px 2px rgb(208, 213, 221)", background:"white", borderRadius:"10px"}}>
                <h2 style={{ width:"25%",height:"20px", color: '#E78203', marginTop:"1px", fontSize:"17px", overflow:"hidden",padding:"5px 5px 5px 5px", marginLeft:"auto",marginRight:"auto"}}>in kcal</h2> 
                <input type="number" {...register("calories_burnt")} style={{width:"120%", boxShadow:"1px 1px 1px 1px rgb(208, 213, 221)", borderColor:"white", borderRadius:"7px"}} />
            </div>

            <h2 style={{color: '#531EB7', fontSize:"120%", paddingLeft:10 ,marginTop:'5%'}}>Calories consumed today</h2> 
            <div className='kcalconsume' style={{height:"35px",display:"flex", flexDirection:"row",justifyContent:"space-between", gap:"1px", marginLeft:"10px", marginTop:"-5px", boxShadow:"1px 1px 2px 2px rgb(208, 213, 221)", background:"white", borderRadius:"10px"}}>
                <h2 style={{ width:"25%", height:"20px", color: '#E78203', marginTop:"1px", fontSize:"17px",overflow:"hidden", padding:"5px 5px 5px 5px", marginLeft:"auto",marginRight:"auto"}}>in kcal</h2> 
                <input type="number" {...register("calories_consumed")} style={{width:"120%", boxShadow:"1px 1px 1px 1px rgb(208, 213, 221)", borderColor:"white", borderRadius:"7px"}} />
            </div>

            {/* moods */}
            <h2 style={{color: '#531EB7', fontSize:"130%", paddingLeft:10 ,marginTop:'8%'}}>My current mood</h2> 
            <div className='mood' style={{height:"40px",display:"flex", flexDirection:"row",justifyContent:"space-between", gap:"1px", marginLeft:"10px", marginTop:"-5px", boxShadow:"1px 1px 2px 2px rgb(208, 213, 221)", background:"white", borderRadius:"10px"}}>
                <Button startIcon={<MoodIcon style={{fontSize:"170%"}}/>} style={{color:"#2A8C33", marginRight:"-10%"} }></Button>
                <Button startIcon={<SentimentSatisfiedAltIcon style={{fontSize:"170%"}}/>} style={{color:"#28A21D", marginRight:"-10%"}}></Button>
                <Button startIcon={<SentimentSatisfiedIcon style={{fontSize:"170%"}}/>} style={{color:"#E8AE1A", marginRight:"-10%"}}></Button>
                <Button startIcon={<SentimentDissatisfiedIcon style={{fontSize:"170%"}}/>} style={{color:"#AD5210", marginRight:"-10%"}}></Button>
                <Button startIcon={<SentimentVeryDissatisfiedIcon style={{fontSize:"170%"}}/>} style={{color:"#9A0505"}}></Button>
            </div>

            {/* hours */}
            <h2 style={{color: '#531EB7', fontSize:"120%", paddingLeft:10 ,marginTop:'8%'}}>Hours slept</h2> 
            <div className='sleephours' style={{height:"50px",display:"flex", flexDirection:"row",justifyContent:"space-between", gap:"1px", marginLeft:"10px", marginTop:"-5px", boxShadow:"1px 1px 2px 2px rgb(208, 213, 221)", background:"white", borderRadius:"10px"}}>
                <input type='range' min="0" max="24" step={1} {...register("hours_slept")} value={sleepData} onChange={(e)=>setSleepData(e.target.value)} style={{outline: 'none',overflow: 'hidden' , width:"100%",marginLeft:"10px", marginRight:"auto"}}></input>
                <h2 style={{color: 'black', fontSize:15, paddingLeft:'5px', paddingRight:"10px",marginTop:'15px'}}>{sleepData}</h2> 
            </div>

            {/* water */}
            <h2 style={{color: '#531EB7', fontSize:"120%", paddingLeft:10 ,marginTop:'8%'}}>Water drank</h2> 
            <div className='water' style={{height:"50px",display:"flex", flexDirection:"row",justifyContent:"space-between", gap:"1px", marginLeft:"10px", marginTop:"-5px", boxShadow:"1px 1px 2px 2px rgb(208, 213, 221)", background:"white", borderRadius:"10px"}}>
                <input type='range' min="0" max="100" step={1} {...register("water_drank")} value={waterData} onChange={(e)=>setWaterData(e.target.value)} style={{outline: 'none',overflow: 'hidden' , width:"100%",marginLeft:"10px", marginRight:"auto"}}></input>
                <h2 style={{color: 'black', fontSize:15, paddingLeft:'5px', paddingRight:"10px",marginTop:'15px'}}>{waterData}</h2> 
            </div>

            {/* steps */}
            <h2 style={{color: '#531EB7', fontSize:"120%", paddingLeft:10 ,marginTop:'8%'}}>Steps taken</h2> 
            <div className='steps' style={{height:"50px",display:"flex", flexDirection:"row",justifyContent:"space-between", gap:"1px", marginLeft:"10px", marginTop:"-5px", boxShadow:"1px 1px 2px 2px rgb(208, 213, 221)", background:"white", borderRadius:"10px"}}>
                <input type='range' min="0" max="50000" step={1} {...register("steps_taken")} value={stepsData} onChange={(e)=>setStepsData(e.target.value)} style={{outline: 'none',overflow: 'hidden' , width:"100%",marginLeft:"10px", marginRight:"auto"}}></input>
                <h2 style={{color: 'black', fontSize:15, paddingLeft:'5px', paddingRight:"10px",marginTop:'15px'}}>{stepsData}</h2> 
            </div>
            <Button type="submit" disabled={isSubmitting} style={
                {fontSize:"18px",backgroundColor:"#FFB454", color:"#531EB7",borderRadius:"20px", marginTop:"0px",height:"40px", width:"100%", marginLeft:"auto", marginRight:"auto", paddingLeft:"20px", paddingRight:"30px", textTransform: 'none', fontWeight:"550", fontFamily: 'Quicksand'}}>
                Submit
            </Button>

            {/* premium stuff */}
            <h2 style={{color: '#531EB7', fontSize:"160%", paddingLeft:10 ,marginTop:'40px'}}>Coach consultation</h2> 
            <h2 style={{color: 'black', fontSize:16, paddingLeft:10 ,marginTop:'-10px'}}>With fitflow premium, you can get access to collaborate with licensed professionals to help you in improving your health and keeping you fit!</h2> 
            <Button style={{fontSize:"18px",backgroundColor:"#FFB454", color:"#531EB7",borderRadius:"20px", marginTop:"0px",height:"40px", width:"100%", marginLeft:"auto", marginRight:"auto", paddingLeft:"20px", paddingRight:"30px", textTransform: 'none', fontWeight:"550", fontFamily: 'Quicksand'}}>Get fitflow premium</Button>
        </form>
    </div>
  )
}