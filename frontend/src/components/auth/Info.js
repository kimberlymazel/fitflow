import React from 'react'
import logoright from '../../icons/logoright.svg'
import halfcircle from '../../icons/halfcircle.svg'
import '../../style/auth/info.css'

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
  )
}

export default Info