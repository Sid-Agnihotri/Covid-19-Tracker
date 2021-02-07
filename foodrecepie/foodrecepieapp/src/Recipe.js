import React from "react";

function Recipe({ title, image, calories, ingredients }) {
  console.log("ingri-", ingredients);
  return (
    <div>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => {
          return <li>{ingredient.text}</li>;
        })}
      </ol>
      <p>{calories}</p>
      <img src={image} alt="image" />
    </div>
  );
}

export default Recipe;
