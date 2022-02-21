import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import axiosInstance from "../axiosInstance";
import Ingredients from "./Ingredients";
import { Heading } from "../styled/Heading";

const Item = ({ cocktail }) => {
  const [data, setData] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axiosInstance.get(
          `/lookup.php?i=${cocktail.idDrink}`
        );
       // console.log(res.data.drinks[0]);
        setData(res.data.drinks[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data) {
      let ingredients = [];
      for (let i = 1; i <= 15; i++) {
        ingredients.push(data[`strIngredient${i}`]);
      }
      let filtered = ingredients.filter((ingredient) => ingredient !== null);
      setIngredients(filtered);
    }
  }, [data]);

  return (
    <>
     
        <div className="item-card">
          <div className="item-card-body">
            <Heading fs="1.87rem" ta="unset" font="'Raleway', sans-serif">
              {cocktail.strDrink}
            </Heading>
            {ingredients.length > 0 && (
              <Ingredients ingredients={ingredients} />
            )}
          </div>
          <Link to={`/cocktails/${cocktail.idDrink}`}>
            <div className="img-card-container">

           
            <LazyLoadImage
              src={cocktail.strDrinkThumb}
              effect="blur"
              alt=""
            />
             </div>
          </Link>
        </div>
     
    </>
  );
};

export default Item;
