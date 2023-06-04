import React, { useState }  from 'react'
import '../../style/tracker/checkin.css'
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
        formState: { isSubmitting },
      } = useForm({
        defaultValues: { ...defaultValues },
      });

    // const [selectedMood, setSelectedMood] = useState(0)
    // // 1 = very happy, 2 = happy, 3 = fine, 4 = sad, 5 = very sad
    const [sleepData, setSleepData]=useState(0)
    const [waterData, setWaterData]=useState(0)
    const [stepsData, setStepsData]=useState(0)

    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);
    
    const handleClick = (event, newSelect) => {
        setIsActive(current => !current);
        setIsActive2(false);
        setIsActive3(false);
        setIsActive4(false);
        setIsActive5(false);
    };
    
    const handleClick2 = (event, newSelect) => {
        setIsActive2(current => !current);
        setIsActive(false);
        setIsActive3(false);
        setIsActive4(false);
        setIsActive5(false);
    };

    const handleClick3 = (event, newSelect) => {
        setIsActive3(current => !current);
        setIsActive(false);
        setIsActive2(false);
        setIsActive4(false);
        setIsActive5(false);
    };

    const handleClick4 = (event, newSelect) => {
        setIsActive4(current => !current);
        setIsActive(false);
        setIsActive2(false);
        setIsActive3(false);
        setIsActive5(false);
    };

    const handleClick5 = (event, newSelect) => {
        setIsActive5(current => !current);
        setIsActive(false);
        setIsActive2(false);
        setIsActive3(false);
        setIsActive4(false);
    };

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
    <div className="checkinwhole">
        <form className='checkinform' onSubmit={handleSubmit(onSubmit)}>
            <h2 className= "checkinformtitle">Daily check-in</h2> 

            <h2 className='checkincategorytitle1'>Calories burnt today</h2> 
            <div className='kcalburnt'>
                <h2 className="inkcal" >in kcal</h2> 
                <input type="number" {...register("calories_burnt")} 
                    style={{
                        width:"120%", 
                        boxShadow:"1px 1px 1px 1px rgb(208, 213, 221)", 
                        borderColor:"white", 
                        borderRadius:"7px"}} />
            </div>

            <h2 className='checkincategorytitle2'>Calories consumed today</h2> 
            <div className='kcalconsume' >
                <h2 className='inkcal'>in kcal</h2> 
                <input type="number" {...register("calories_consumed")} 
                    style={{
                        width:"120%", 
                        boxShadow:"1px 1px 1px 1px rgb(208, 213, 221)", 
                        borderColor:"white", 
                        borderRadius:"7px"}} />
            </div>

            {/* moods */}
            <h2 className='checkincategorytitle3'>My current mood</h2> 
            <div className='mood'>
                <Button 
                    startIcon={<MoodIcon style={{fontSize:"170%"}}/>} 
                    style={{
                        color: isActive ? "white" : "#2A8C33", 
                        marginRight:"-10%",
                        backgroundColor: isActive ? '#2A8C33' : '',
                    }}
                    onClick={handleClick}
                ></Button>

                <Button 
                    startIcon={<SentimentSatisfiedAltIcon style={{fontSize:"170%"}}/>} 
                    style={{
                        color: isActive2 ? "white" : "#28A21D", 
                        marginRight:"-10%",
                        backgroundColor: isActive2 ? '#28A21D' : ''
                    }}
                    onClick={handleClick2}
                ></Button>
                <Button 
                    startIcon={<SentimentSatisfiedIcon style={{fontSize:"170%"}}/>} 
                    style={{
                        color: isActive3 ? "white" : "#E8AE1A", 
                        marginRight:"-10%",
                        backgroundColor: isActive3 ? "#E8AE1A" : ""
                    }}
                    onClick={handleClick3}
                ></Button>
                <Button 
                    startIcon={<SentimentDissatisfiedIcon style={{fontSize:"170%"}}/>} 
                    style={{
                        color: isActive4 ? "white" : "#FD6C00", 
                        marginRight:"-10%",
                        backgroundColor: isActive4 ? "#FD6C00" : "", 
                    }}
                    onClick={handleClick4}
                ></Button>
                <Button 
                    startIcon={<SentimentVeryDissatisfiedIcon style={{fontSize:"170%"}}/>} 
                    style={{
                        color: isActive5 ? "white" : "#9A0505", 
                        backgroundColor: isActive5 ? "#9A0505" : ""
                    }}
                    onClick={handleClick5}
                ></Button>
            </div>

            {/* hours */}
            <h2 className='checkincategorytitle3'>Hours slept</h2> 
            <div className='slidercheckinitem' >
                <input type='range' min="0" max="24" step={1} {...register("hours_slept")} value={sleepData} onChange={(e)=>setSleepData(e.target.value)} style={{outline: 'none',overflow: 'hidden' , width:"100%",marginLeft:"10px", marginRight:"auto"}}></input>
                <h2 className="sliderdatatext" >{sleepData}</h2> 
            </div>

            {/* water */}
            <h2 className='checkincategorytitle3'>Water drank</h2> 
            <div className='slidercheckinitem'>
                <input type='range' min="0" max="3000" step={1} {...register("water_drank")} value={waterData} onChange={(e)=>setWaterData(e.target.value)} style={{outline: 'none',overflow: 'hidden' , width:"100%",marginLeft:"10px", marginRight:"auto"}}></input>
                <h2 className="sliderdatatext">{waterData}</h2> 
            </div>

            {/* steps */}
            <h2 className='checkincategorytitle3'>Steps taken</h2> 
            <div className='slidercheckinitem'>
                <input type='range' min="0" max="2000" step={1} {...register("steps_taken")} value={stepsData} onChange={(e)=>setStepsData(e.target.value)} style={{outline: 'none',overflow: 'hidden' , width:"100%",marginLeft:"10px", marginRight:"auto"}}></input>
                <h2 className="sliderdatatext">{stepsData}</h2> 
            </div>
            <Button type="submit" disabled={isSubmitting}
                style={{
                    fontSize:"18px", 
                    boxShadow:"1px 1px 1px 1px lightgrey",
                    backgroundColor:"#FFB454", 
                    color:"#531EB7",
                    borderRadius:"20px", 
                    marginTop:"20px",
                    height:"40px", 
                    width:"97%", 
                    marginLeft:"12px",
                    marginRight:"auto", 
                    paddingLeft:"20px",
                    paddingRight:"30px", 
                    textTransform: 'none', 
                    fontWeight:"550", 
                    fontFamily: 'Quicksand'
                    }}>Submit</Button>

            {/* premium stuff */}
            <h2 className="coachtitle">Coach consultation</h2> 
            <h2 className="coachdesc">With fitflow premium, you can get access to collaborate with licensed professionals to help you in improving your health and keeping you fit!</h2> 
            <Button 
                style={{
                    fontSize:"18px",
                    boxShadow:"1px 1px 1px 1px lightgrey",
                    backgroundColor:"#FFB454", 
                    color:"#531EB7",
                    borderRadius:"20px", 
                    marginTop:"10px",
                    height:"40px", 
                    width:"97%", 
                    marginLeft:"12px", 
                    marginRight:"auto", 
                    paddingLeft:"20px", 
                    paddingRight:"30px", 
                    textTransform: 'none', 
                    fontWeight:"550", 
                    fontFamily: 'Quicksand'
                    }}>Get fitflow premium</Button>
        </form>
    </div>
  )
}