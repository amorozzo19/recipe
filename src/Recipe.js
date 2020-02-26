import React from "react";
import style from "./recipes.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  let intCalories = parseInt(calories);
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredients => (
          <li>{ingredients.text}</li>
        ))}
      </ol>
      <p>Calories: {intCalories}</p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};
export default Recipe;
