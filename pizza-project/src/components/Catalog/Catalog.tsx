import React from "react";
import Pizza from "./Pizza/Pizza";

import MyLoader from "../../UI/Loader/MyLoader";
import { CartItem } from "../../redux/slices/cartSlice";

type CatalogType = {
  isLoading: string;
  pizzas: CartItem[];
};

const Catalog: React.FC<CatalogType> = (props) => {
  const sceleton = [...new Array(6)].map((_, index) => {
    return <MyLoader key={index}></MyLoader>;
  });

  let pizzas = [];

  if (props.isLoading === "error") {
    return (
      <div className='content__error'>
        <h2>Ошибка😕</h2>
        <p>К сожалению, при загрзке пицц произошла ошибка...</p>
      </div>
    );
  } else if (props.isLoading == "loading") {
    pizzas = sceleton;
  } else if (props.isLoading != "loading" && props.pizzas.length === 0) {
    return <h3>Ничего не найдено...</h3>;
  } else {
    pizzas = props.pizzas.map((item) => {
      return <Pizza key={item.title} {...item}></Pizza>;
    });
  }

  return <div className='content__items'>{pizzas}</div>;
};

export default Catalog;
