import React, {useState, useEffect} from 'react'
import Stretch from '../cards/Stretch'

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");
  
  function goToUrl(){
    window.open(meal.sourceUrl, '_blank');
  }
  
  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=8fb4b48ee9a644c3a9d374eb1bbc7cf7&includeNutrition=false`
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
      <Stretch onClick={goToUrl}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          position: 'relative'
        }}
      >
        <div className='desc'>
          <h1>{meal.title}</h1>
          <ul>
            <li>Preparation time: {meal.readyInMinutes} minutes</li>
            <li>Number of servings: {meal.servings}</li>
            {/* <a href={meal.sourceUrl}>Go to recipe</a> */}
          </ul>
        </div>
      </Stretch>
    </article>
  )
}
