import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heading } from "../styled/Heading";
import Button from '@material-ui/core/Button';
import { BiLeftArrow } from 'react-icons/bi';


const ItemDetail = ({ cocktail }) => {
  const navigate = useNavigate();
  const [allIngredients, setAllIngredients] = useState([]);
  const [allMeasures, setAllMeasures] = useState([]);

  const getAllmeasures = () => {
    let measures = [];
    for (let i = 1; i <= 15; i++) {
      measures.push(cocktail[`strMeasure${i}`]);
    }
    let filtered = measures.filter((measure) => measure !== null);
    setAllMeasures(filtered);
    console.log(allMeasures);
  };
  /////
  const getAllIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktail[`strIngredient${i}`];
      if (ingredient) {
        ingredients.push(ingredient);
      }
    }
    setAllIngredients(ingredients);
  };
  useEffect(() => {
    getAllIngredients();
    getAllmeasures();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>

      <div className="single-item-card">
      
      <Button
       onClick={() => navigate(-1)}
        variant="contained"
        color="secondary"
        startIcon={<BiLeftArrow />}
        >
         back
       </Button>

        {cocktail.strDrink && (
          <Heading fs="1.8rem" font="'Raleway', sans-serif" className="mt-3">
            {cocktail.strDrink}
          </Heading>
        )}
        <img src={cocktail.strDrinkThumb} alt="" />
        <ul>
          {allIngredients.map((ingredient, index) => (
            <li key={index}>
              {allMeasures[index]} - {ingredient}
            </li>
          ))}
        </ul>
        <h3>How to prepare</h3>
        <p>{cocktail.strInstructions}</p>
      </div>
    </>
  );
};

export default ItemDetail;
