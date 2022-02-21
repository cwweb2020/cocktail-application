import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [cocktails, setCocktails] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axiosInstance.get("/filter.php?g=Cocktail_glass");
       // console.log(res.data);
        setCocktails(res.data.drinks);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    console.log(cocktails);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ItemList cocktails={cocktails} />
    </>
  );
};

export default ItemListContainer;
