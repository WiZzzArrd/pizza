import React from "react";
import Pizza from "./Pizza/Pizza";
import MyLoader from "../../UI/Loader/MyLoader";

const Catalog: React.FC = (props) => {
  const sceleton = [...new Array(6)].map((_, index) => {
    return <MyLoader key={index}></MyLoader>;
  });

  const pizzas = props.pizzas.map((item) => {
    return <Pizza key={item.title} {...item}></Pizza>;
  });

  if (props.isLoading === "error") {
    return (
      <div className='content__error'>
        <h2>Ошибка😕</h2>
        <p>К сожалению, при загрзке пицц произошла ошибка...</p>
      </div>
    );
  }

  return (
    <div className='content__items'>
      {props.isLoading === "loading" ? sceleton : pizzas}
    </div>
  );
};

export default Catalog;
