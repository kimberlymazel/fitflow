import React from 'react';
import Meal from "./Meal";
import '../../style/mealplan.css'

export default function MealList({ mealData }) {
    const nutrients = mealData.nutrients;

    console.log(mealData)

    return (
        <main>
            <section className="nutrients">
                <h1>Today's Meal Plan</h1>
                <h2>Macros</h2>
                <ul>
                    <li>Calories: {nutrients.calories.toFixed(0)}</li>
                    <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
                    <li>Fat: {nutrients.fat.toFixed(0)}</li>
                    <li>Protien: {nutrients.protein.toFixed(0)}</li>
                </ul>
            </section>

            <section className="meals">
                {mealData.meals.map((meal) => {
                    return <Meal key={meal.id} meal={meal} />;
                })}
            </section>
        </main>
  )
}