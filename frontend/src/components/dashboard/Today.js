import React, {useState, useEffect} from 'react'
// import Box from '@mui/material/Box'
// import Grid from '@mui/material/Grid'
// import Standard from '../cards/Standard'
import '../../style/dashboard.css'
import '../../style/dashboard/today.css'

import axiosInstance from "../../services/axios";

function Today() {
    const [bmi, setBMI] = useState([]);
    // const [showPopup, setShowPopup] = useState(false);
    // const [height, setHeight] = useState('');
    // const [weight, setWeight] = useState('');

    const [userData, setUserData] = useState([]);
    const [mealData, setMealData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axiosInstance.get('/users/me');
            setUserData(response.data);
    
            // Call the fetchBMI function here
            fetchBMI(response.data);
          } catch (error) {
            console.error(error);
          }
        };

        const fetchMealData = async () => {
          try {
            const response = await axiosInstance.get('/mealdata/get-meal-plan');
            setMealData(response.data);
            console.log(response.data);

            // Fetch the image URL for each meal
            response.data.meals.forEach((meal) => {
              fetchImageUrl(meal.id);
            });
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
        fetchMealData();
      }, []);

    function goToUrl(meal){
        window.open(meal.sourceUrl, '_blank');
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
          })
          .catch(() => {
            console.log("error");
          });
    };

    const fetchImageUrl = async (mealId) => {
      fetch(
        `https://api.spoonacular.com/recipes/${mealId}/information?apiKey=8fb4b48ee9a644c3a9d374eb1bbc7cf7&includeNutrition=false`
      )
        .then((response) => response.json())
        .then((data) => {
          // Update the mealData state to include the image URL for the specific meal
          setMealData((prevMealData) => {
            const updatedMeals = prevMealData.meals.map((meal) => {
              if (meal.id === mealId) {
                return {
                  ...meal,
                  imageUrl: data.image,
                };
              }
              return meal;
            });
            return {
              ...prevMealData,
              meals: updatedMeals,
            };
          });
        })
        .catch(() => {
          console.log('error');
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
                    </div>
                </div>
                <div className='mealscontainer' >
                    <h3 className='todaysmeals'>Today's Meals</h3>
                    <div className='mealscont'>
                    {mealData.meals && mealData.meals?.map((meal) => (
                      <div className="meal-generateditem" key={meal.id}>
                        <img
                          className="mealimage"
                          onClick={() => goToUrl(meal.sourceUrl)}
                          src={meal.imageUrl}
                          alt="food"
                        />
                        <div className="meal-gendetail">
                          <h2 className="mealitemtitle">{meal.title}</h2>
                          <h2 className="mealitempreptime">{meal.readyInMinutes} minutes</h2>
                          <h2 className="mealitemservingsize">{meal.servings} servings</h2>
                        </div>
                      </div>
                    ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Today