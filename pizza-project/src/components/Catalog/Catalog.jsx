import React from "react";
import Pizza from "./Pizza/Pizza";
import MyLoader from "../../UI/Loader/MyLoader";

export default function Catalog(props) {
  return (
    <div className='content__items'>
      {props.isLoading
        ? [...new Array(6)].map((_, index) => {
            return <MyLoader key={index}></MyLoader>;
          })
        : props.pizzas.map((item) => {
            return <Pizza key={item.title} {...item}></Pizza>;
          })}
    </div>
  );
}
