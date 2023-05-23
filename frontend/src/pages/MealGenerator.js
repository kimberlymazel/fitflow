import React, {useState} from 'react';
import MealList from "../components/mealplan/MealList"
import Header from '../components/general/Header';
import Navigation from '../components/general/Navigation';

export const MealGenerator = () => {
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);
    const [selectedDiet, setSelectedDiet] = useState('');

    function handleOptionChange(e){
        setSelectedDiet(e.target.value)
    }

    function handleChange(e){
        setCalories(e.target.value);
    }

    function getMealData(){
        fetch(
            `https://api.spoonacular.com/mealplanner/generate?apiKey=d6ff71253b57408ba9d445343d1c9b7c&timeFrame=day&targetCalories=${calories}&diet=${selectedDiet}`
        )
        .then((response) => response.json())
        .then((data) => {
            setMealData(data);
            // console.log(data);
        })
        .catch(() => {
            console.log("error");
        });
    }

    return (
        <div>
            {/* <Header></Header>
            <Navigation></Navigation> */}
            <section className="controls">
                I want to eat

                <input
                type="number"
                placeholder="# Calories"
                onChange={handleChange} />

                <div>
                        <input
                        type="radio"
                        id="paleo"
                        value="paleo"
                        checked={selectedDiet === 'paleo'}
                        onChange={handleOptionChange}
                        />
                        <label htmlFor="paleo">Paleogenic</label>
                    </div>
                    <div>
                        <input
                        type="radio"
                        id="vegetarian"
                        value="vegetarian"
                        checked={selectedDiet === 'vegetarian'}
                        onChange={handleOptionChange}
                        />
                        <label htmlFor="vegetarian">Vegetarian</label>
                    </div>
                    <div>
                        <input
                        type="radio"
                        id="vegan"
                        value="vegan"
                        checked={selectedDiet === 'vegan'}
                        onChange={handleOptionChange}
                        />
                        <label htmlFor="vegan">Vegan</label>
                    </div>
                    <div>
                        <input
                        type="radio"
                        id="keto"
                        value="keto"
                        checked={selectedDiet === 'keto'}
                        onChange={handleOptionChange}
                        />
                        <label htmlFor="keto">Ketogenic</label>
                    </div>
            </section>
            <button onClick={getMealData}>Generate</button>
            {mealData && <MealList mealData={mealData}/>}
        </div>
  )
}