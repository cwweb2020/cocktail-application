import React from "react";

const Ingredients = ({ ingredients }) => {
  return (
    <>
      {ingredients.length > 2 ? (
        <ul>
          <li>{ingredients[0]}</li>
          <li>{ingredients[1]}</li>
          <p>and {ingredients.length - 2} more ingredients </p>
        </ul>
      ) : (
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Ingredients;
