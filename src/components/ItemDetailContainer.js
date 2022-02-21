import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import axiosInstance from "../axiosInstance";
import Spinner from "./Spinner";
import ScrollTop from "./ScrollTop";



const ItemDetailContainer = () => {
  const params = useParams();

  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axiosInstance.get(`/lookup.php?i=${params.id}`);
       // console.log(res.data.drinks[0]);
        setCocktail(res.data.drinks[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
   
  return (
    <>
         
           {cocktail ? <ItemDetail cocktail={cocktail} /> 
              : (<div className='d-flex justify-content-center'><Spinner  /></div>)
           }
           <ScrollTop />
    </>
  );
};

export default ItemDetailContainer;
