import React, {useState} from 'react';
import Small from '../cards/Small'
import Box from '@mui/material/Box'
import '../../style/mealplan.css'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import MealList from "./MealList"

import axiosInstance from "../../services/axios";
import anything from '../../icons/anything.png'
import paleo from '../../icons/paleo.png'
import vegetarian from '../../icons/vegetarian.png'
import vegan from '../../icons/vegan.png'
import keto from '../../icons/keto.png'

function MPGenerator() {
    const [selectedDiet, setSelectedDiet] = useState('anything');
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);
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
    
    const handleDiet = (event, newSelect) => {
        setSelectedDiet(newSelect);
    };

    function handleCalorie(e){
        setCalories(e.target.value);
    }

    const saveMealDataToBackend = async (mealData) => {
        try {
            await axiosInstance.post('/mealdata/save-meal-plan', mealData);
            console.log('Meal data saved to backend successfully.');
        } catch (err) {
            console.error(err);
        }
    };
    
    function getMealData(){
        fetch(
            `https://api.spoonacular.com/mealplanner/generate?apiKey=d6ff71253b57408ba9d445343d1c9b7c&timeFrame=day&targetCalories=${calories}&diet=${selectedDiet}`
        )
        .then((response) => response.json())
        .then((data) => {
            setMealData(data);
            saveMealDataToBackend(data);
        })
        .catch(() => {
            console.log("error");
        });
    }

    return (
        <div className="mp-generator">
            <h1>Create a meal plan</h1>
            <h3>Reach your diet and nutritional goals
                with our meal plan generator</h3>
            <Box
                textAlign='center'
            >
                <ToggleButtonGroup
                    value={selectedDiet}
                    exclusive="true"
                    onChange={handleDiet}
                >
                    <ToggleButton 
                        value="anything"
                        onClick={handleClick}
                        style={{
                            backgroundColor: isActive ? 'lightgrey' : ''
                        }}
                    >
                        <Small
                            style={{
                                background: '#B497ED'
                            }}
                        >
                            <img src={anything} height={65}></img>
                            <h5>Anything</h5>
                        </Small>
                    </ToggleButton>


                    <ToggleButton 
                        value="paleo"
                        onClick={handleClick2}
                        style={{
                            backgroundColor: isActive2 ? 'lightgrey' : ''
                        }}
                    >
                        <Small
                            style={{
                                background: '#A781F0'
                            }}
                        >
                            <img src={paleo} height={65}></img>
                            <h5>Paleo</h5>
                        </Small>
                    </ToggleButton>

                    <ToggleButton 
                        value="vegetarian"
                        onClick={handleClick3}
                        style={{
                            backgroundColor: isActive3 ? 'lightgrey' : ''
                        }}
                    >
                        <Small
                            style={{
                                background: '#996CF0'
                            }}
                        >
                            <img src={vegetarian} height={65}></img>
                            <h5>Vegetarian</h5>
                        </Small>
                    </ToggleButton>

                    <ToggleButton
                        value="vegan"
                        onClick={handleClick4}
                        style={{
                            backgroundColor: isActive4 ? 'lightgrey' : ''
                        }}
                    > 
                        <Small
                            style={{
                                background: '#8D5AF0'
                            }}
                        >
                            <img src={vegan} height={65}></img>
                            <h5>Vegan</h5>
                        </Small>
                    </ToggleButton>

                    <ToggleButton 
                        value="keto"
                        onClick={handleClick5}
                        style={{
                            backgroundColor: isActive5 ? 'lightgrey' : ''
                        }}
                    >
                        <Small
                            style={{
                                background: '#7E44EE'
                            }}
                        >
                            <img src={keto} height={65}></img>
                            <h5>Keto</h5>
                        </Small>
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>

            <Box>
                <Stack>
                    <div className="drop">
                        <div className="right-align">
                            <h3>I want to eat</h3>
                            <TextField
                                type="number"
                                label="# Calories"
                                sx={{width: 300}}
                                onChange={handleCalorie}
                            >
                            </TextField>
                        </div>

                        <div className="buttondiv">
                            <Button 
                                variant="contained" 
                                onClick={getMealData}
                                style={{
                                    backgroundColor: "#EA9C39"
                                }}
                            >
                                Generate
                            </Button>
                        </div>
                    </div>
                </Stack>
            </Box>

            <div className="generated">
                {mealData && <MealList mealData={mealData}/>}
            </div>
        </div>
    ) 
}

export default MPGenerator