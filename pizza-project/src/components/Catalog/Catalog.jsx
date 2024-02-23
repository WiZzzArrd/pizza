import React from "react";
import Pizza from "./Pizza/Pizza";
import MyLoader from "../../UI/Loader/MyLoader";

export default function Catalog(props) {
  const sceleton = [...new Array(6)].map((_, index) => {
    return <MyLoader key={index}></MyLoader>;
  });

  const pizzas =
    typeof props.pizzas === "string" || props.pizzas.length === 0 ? (
      <p style={{ textAlign: "center" }}>Ничего не найдено</p>
    ) : (
      props.pizzas.map((item) => {
        return <Pizza key={item.title} {...item}></Pizza>;
      })
    );

  return (
    <div className='content__items'>{props.isLoading ? sceleton : pizzas}</div>
  );
}
