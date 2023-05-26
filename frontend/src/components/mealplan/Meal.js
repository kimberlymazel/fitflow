import React, {useState, useEffect} from 'react'
import Stretch from '../cards/Stretch'

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=d6ff71253b57408ba9d445343d1c9b7c&includeNutrition=false`
    )
    .then((response) => response.json())
    .then((data) => {
      setImageUrl(data.image);
    })
    .catch(() => {
      console.log("error");
    })
  }, [meal.id])

  return (
    <article>
      <Stretch
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      >
        <h1>{meal.title}</h1>
        <ul>
          <li>Preparation time: {meal.readyInMinutes} minutes</li>
          <li>Number of servings: {meal.servings}</li>
          <a href={meal.sourceUrl}>Go to recipe</a>
        </ul>
      </Stretch>
    </article>
  )
}
