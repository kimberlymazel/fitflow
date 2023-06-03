import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Standard from '../cards/Standard'
import '../../style/dashboard.css'
import '../../style/dashboard/today.css'

import axiosInstance from "../../services/axios";

function Today() {
    const [bmi, setBMI] = useState([]);
    // const [showPopup, setShowPopup] = useState(false);
    // const [height, setHeight] = useState('');
    // const [weight, setWeight] = useState('');

    const [userData, setUserData] = useState([]);
  
    // const handleEditClick = () => {
    //   setShowPopup(true);
    // };
  
    // const handleSaveBMI = () => {
    //   const parsedHeight = parseFloat(height);
    //   const parsedWeight = parseFloat(weight);
  
    //   const bmiValue = (parsedWeight / (parsedHeight/100 * parsedHeight/100)).toFixed(1);
    //   setBMI(bmiValue);
    //   setShowPopup(false);
    // };
  
    // const handleClosePopup = () => {
    //   setShowPopup(false);
    // };

    // let bmiCategory = '';
    // if (bmi !== null) {
    //   if (bmi < 18.5) {
    //     bmiCategory = 'Underweight';
    //   } else if (bmi >= 18.5 && bmi <= 25) {
    //     bmiCategory = 'Normal';
    //   } else if (bmi>25) {
    //     bmiCategory = 'Overweight';
    //   }
    // }

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axiosInstance.get('/users/me');
            setUserData(response.data);
            console.log(response.data);
    
            // Call the fetchBMI function here
            fetchBMI(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);

      function goToUrl(){
        window.open('https://spoonacular.com/recipes/moroccan-lemon-shish-kebabs-652433', '_blank');
      }
    
      const fetchBMI = async (userData) => {
        const { age, weight, height } = userData;
    
        fetch(
          `https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&weight=${weight}&height=${height}`,
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '6c1a7f9eb4msh17aa6ace300ca74p1e406cjsn50d074622f24',
              'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
            }
          }
        )
          .then((response) => response.json())
          .then((data) => {
            setBMI(data);
            console.log(data);
          })
          .catch(() => {
            console.log("error");
          });
      };

    return (
        <div class="today">
            <div className="bottomportiontoday">
                <div className='bmicontainer'>
                    <h3 className="yourbmititle">Your BMI</h3>
                    <div>
                        <button className="bmidisplay">{bmi.data?.bmi} (kg/m^2)</button>
                        <p className="bmihealthdata">{bmi.data?.health}</p>
                        {/* {bmi && (
                            <div>
                                <p style={{fontSize:"20px",marginLeft:"auto",marginRight:"auto", textAlign:"center",  marginTop:"5px", color:"#531EB7", fontWeight:"800", border:"none"}}>{bmi.health}</p>
                            </div>
                        )} */}
                        {/* {showPopup && (
                        <div className="popup" style={{margin:"10px auto 10px auto", display:"flex",alignItems:"center", justifyContent:"center"}}>
                            <input
                            type="text"
                            placeholder="Height (cm)"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            style={{width:"100px", fontSize:"16px",borderColor:"grey" }}
                            />
                            <input
                            type="text"
                            placeholder="Weight (kg)"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            style={{width:"100px", fontSize:"16px", borderColor:"grey" }}
                            />
                            <button onClick={handleSaveBMI} 
                                style={{ fontSize:"16px", backgroundColor:"#C4B2E8"}}
                            >Save</button>
                            <button onClick={handleClosePopup}
                                style={{ fontSize:"16px", backgroundColor:"#C4B2E8"}}
                            >Exit</button>
                        </div>
                        )} */}
                    </div>
                </div>
                <div className='mealscontainer' >
                    <h3 className='todaysmeals'>Today's Meals</h3>
                    <div className='mealscont'>
                      <div className='meal-generateditem'>
                        {/* dont forget to alter the goToUrl function also its above <3 */}
                        <img className="mealimage" onClick={goToUrl}src="https://cdn.discordapp.com/attachments/794551109523341353/1114538767190085703/Greek-Chicken-Skewers-8-500x500.png"></img>
                        <div className='meal-gendetail'>
                          <h2 className='mealitemtitle'>Morroccan Lemon Shish Kebab</h2>
                          <h2 className='mealitempreptime'>45 minutes</h2>
                          <h2 className='mealitemservingsize'>8 servings</h2>
                        </div>
                      </div>

                      <div className='meal-generateditem'>
                        <img className="mealimage" onClick={goToUrl}src="https://cdn.discordapp.com/attachments/794551109523341353/1114538767190085703/Greek-Chicken-Skewers-8-500x500.png"></img>
                        <div className='meal-gendetail'>
                          <h2 className='mealitemtitle'>Morroccan Lemon Shish Kebab</h2>
                          <h2 className='mealitempreptime'>45 minutes</h2>
                          <h2 className='mealitemservingsize'>8 servings</h2>
                        </div>
                      </div>

                      <div className='meal-generateditem'>
                        <img className="mealimage" onClick={goToUrl}src="https://cdn.discordapp.com/attachments/794551109523341353/1114538767190085703/Greek-Chicken-Skewers-8-500x500.png"></img>
                        <div className='meal-gendetail'>
                          <h2 className='mealitemtitle'>Morroccan Lemon Shish Kebab</h2>
                          <h2 className='mealitempreptime'>45 minutes</h2>
                          <h2 className='mealitemservingsize'>8 servings</h2>
                        </div>
                      </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Today