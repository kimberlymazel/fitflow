import React, { useState } from 'react'
import logoright from '../../icons/logoright.svg'
import halfcircle from '../../icons/halfcircle.svg'
import '../../style/auth/info.css'

<<<<<<< Updated upstream
export const Info = () => {
  return (
    <div className='info'>
        {/*=========UI Background decor==========*/}
        <div className="halfcircledecoinfo">
            <img src={halfcircle}></img>
        </div>


        {/*==========Personal Info section==========*/}
        <div className='infobox'>
            <h2 className='infoboxtitledesc'>You're almost ready!</h2> 
            <h2 className="infoboxtitle">Fill in your data:</h2> 
            {/*========Weight Input=========*/}
            <div className='indivinfobox'>
                <h2 className="personalinputtitle">Weight:</h2> 
                <input className='weightinfoinput' placeholder=' Enter weight (kg)'></input>
            </div>
            {/*========Height Input=========*/}
            <div className='indivinfobox'>
                <h2 className="personalinputtitle">Height:</h2> 
                <input className="heightinfoinput" placeholder=' Enter height (cm)'></input>
            </div>
            {/*========Cardio Goal Input=========*/}
            <div className='indivinfobox'>
                <h2 className="personalinputtitle">Cardio Goal:</h2> 
                <input className="cardiogoalinfoinput" placeholder=' Steps'></input>
            </div>
            {/*========Calorie Goal Input=========*/}
            <div className='indivinfobox'>
                <h2 className="personalinputtitle">Calorie Goal:</h2> 
                <input className="caloriegoalinfoinput" placeholder=' Calories to burn'></input>
            </div>
            {/*========Save Button===============*/}
            <button className="saveinfobtn">Save and Finish</button>


            {/*=========UI Background decor==========*/}
            <div className="logodeco">
                <img src={logoright} width={"500px"}></img>
            </div>
        </div>
    </div>
=======
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import axiosInstance from "../../services/axios";

// , backgroundImage:`url(${infobackground})`
export const Info = () => {
    const location = useLocation();

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
      } = useForm();
      const navigate = useNavigate();

      const onSubmit = async (values) => {
        try {
            const { email, username, password } = location.state;

            await axiosInstance.post("/users/create", {
                ...values,
                email,
                username,
                password
            });
            alert("Account created successfully. Login to continue");
            navigate("/login", { replace: true });
        } catch (err) {
            console.error(err);
        }
      };

    return (
        <div className='info' style={{position: 'relative', overflowX:"hidden", overflowY:"hidden",background:'linear-gradient(to bottom right, #E85959, #8A07C8)', height:"110vh", maxWidth:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", margin:"-5% 0% 0% 0%"}}>
            <div style={{marginTop:"15%", overflowX:"hidden", overflowY:"hidden"}}>
                <img src={halfcircle}></img>
            </div>
            <form className='infobox' onSubmit={handleSubmit(onSubmit)} style={{overflow:"hidden",marginTop:"-50%",backgroundColor:"white", padding:"20px 20px 20px 20px", width:"30%", boxShadow:"2px 2px 2px 2px #434343",borderRadius:"30px"}}>
                <h2 style={{color: '#761BA0', fontSize:'170%', marginLeft:"12%" ,marginTop:'5%'}}>You're almost ready!</h2> 
                <h2 style={{color: '#761BA0', fontSize:'350%', marginLeft:"12%", fontWeight:"1000",marginTop:'-18px'}}>Fill in your data:</h2> 
                <div className='weight' style={{display:"flex",marginTop:'-20px'}}>
                    <h2 style={{color: '#761BA0', fontSize:'150%', marginLeft:"12%" }}>Weight:</h2> 
                    <input type="number" {...register('weight', { required: '*This is a required field' })} placeholder=' Enter weight (kg)' style={{fontSize:"20px",height:"30px" , marginTop:"auto", marginBottom:"auto", width:"310px",marginLeft:"10px",borderColor:"#AAAAAA",borderRadius:"5px"}}></input>
                </div>
                <div className='height' style={{display:"flex",marginTop:'-20px'}}>
                    <h2 style={{color: '#761BA0', fontSize:'150%', marginLeft:"12%" }}>Height:</h2> 
                    <input type="number" {...register('height', { required: '*This is a required field' })} placeholder=' Enter height (cm)' style={{fontSize:"20px",height:"30px" , marginTop:"auto", marginBottom:"auto", width:"310px",marginLeft:"15px",borderColor:"#AAAAAA",borderRadius:"5px"}}></input>
                </div>
                <div className='cardiogoal' style={{display:"flex",marginTop:'-20px'}}>
                    <h2 style={{color: '#761BA0', fontSize:'150%', marginLeft:"12%" }}>Cardio Goal:</h2> 
                    <input type="number" {...register('cardio_goal', { required: '*This is a required field' })} placeholder=' Steps' style={{fontSize:"20px",height:"30px" , marginTop:"auto", marginBottom:"auto", width:"252px",marginLeft:"15px",borderColor:"#AAAAAA",borderRadius:"5px"}}></input>
                </div>
                <div className='caloriegoal' style={{display:"flex",marginTop:'-20px'}}>
                    <h2 style={{color: '#761BA0', fontSize:'150%', marginLeft:"12%" }}>Calorie Goal:</h2> 
                    <input type="number" {...register('calorie_goal', { required: '*This is a required field' })} placeholder=' Calories to burn' style={{fontSize:"20px",height:"30px" , marginTop:"auto", marginBottom:"auto", width:"252px",marginLeft:"10px",borderColor:"#AAAAAA",borderRadius:"5px"}}></input>
                </div>
                <button type="submit" disabled={isSubmitting} style={{width:"420px",fontSize:"20px", marginLeft: '11%', marginRight:"auto", background:"#971BC2",marginBottom:"20px", color:"white",fontWeight:"600", borderColor:"lightgrey",borderRadius:"15px", boxShadow:"2px 3px 2px 2px lightgrey", padding:"10px 5px 10px 5px"}}>
                    {isSubmitting ? 'Creating account...' : 'Save and Finish'}
                </button>
                <div style={{marginTop:"-20px", marginBottom:"-30px"}}>
                    <img src={logoright} width={"500px"}></img>
                </div>
            </form>



        </div>
>>>>>>> Stashed changes
  )
}

export default Info