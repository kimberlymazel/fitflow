import React from 'react'
import logoright from '../../icons/logoright.svg'
import halfcircle from '../../icons/halfcircle.svg'
import '../../style/auth/info.css'
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import axiosInstance from "../../services/axios";


export const Info = () => {
    const location = useLocation();

    const {
        handleSubmit,
        register,
        formState: { isSubmitting },
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        console.log('Submitting form:', values);
        
        try {
            const { first_name, last_name, email, username, password } = location.state;

            await axiosInstance.post("/users/create", {
                ...values,
                first_name,
                last_name,
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
    <div className='info'>

        {/*=========UI Background decor==========*/}
        <div className="halfcircledecoinfo">
            <img src={halfcircle} alt="background"></img>
        </div>

        {/*==========Personal Info section==========*/}
        <form className='infobox' onSubmit={handleSubmit(onSubmit)}>
            <h2 className='infoboxtitledesc'>You're almost ready!</h2> 
            <h2 className="infoboxtitle">Fill in your data:</h2> 
            {/*========Age Input=========*/}
            <div className='indivinfobox'>
                <h2 className="personalinputtitle">Weight:</h2> 
                <input className='weightinfoinput' type="number"  {...register('age', { required: '*This is a required field' })} placeholder=' Enter age'></input>
            </div>
            {/*========Weight Input=========*/}
            <div className='indivinfobox'>
                <h2 className="personalinputtitle">Weight:</h2> 
                <input className='weightinfoinput' type="number"  {...register('weight', { required: '*This is a required field' })} placeholder=' Enter weight (kg)'></input>
            </div>
            {/*========Height Input=========*/}
            <div className='indivinfobox'>
                <h2 className="personalinputtitle">Height:</h2> 
                <input className="heightinfoinput" type="number" {...register('height', { required: '*This is a required field' })} placeholder=' Enter height (cm)'></input>
            </div>
            {/*========Cardio Goal Input=========*/}
            <div className='indivinfobox'>
                <h2 className="personalinputtitle">Cardio Goal:</h2> 
                <input className="cardiogoalinfoinput" type="number" {...register('cardio_goal', { required: '*This is a required field' })} placeholder=' Steps'></input>
            </div>
            {/*========Calorie Goal Input=========*/}
            <div className='indivinfobox'>
                <h2 className="personalinputtitle">Calorie Goal:</h2> 
                <input className="caloriegoalinfoinput"  type="number" {...register('calorie_goal', { required: '*This is a required field' })} placeholder=' Calories to burn'></input>
            </div>
            {/*========Save Button===============*/}
            <button className="saveinfobtn" type="submit" disabled={isSubmitting} >
                {isSubmitting ? 'Creating account...' : 'Save and Finish'}
            </button>


            {/*=========UI Background decor==========*/}
            <div className="logodeco">
                <img src={logoright} width={"500px"} alt="background"></img>
            </div>
        </form>
    </div>
  )
}

export default Info