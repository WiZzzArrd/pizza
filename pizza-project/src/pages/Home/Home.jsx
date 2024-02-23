import React, { useEffect, useState } from "react";
import Categories from "../../components/Categories/Categories";
import Sort from "../../components/Sort/Sort";
import Catalog from "../../components/Catalog/Catalog";

export default function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortType, setSortType] = useState({
    title: "популярности (DESC)",
    sortTitle: "rating",
  });
  const [categoryId, setCategoryId] = useState(1);

  let sortBy = sortType.sortTitle.replace("-", "");
  let order = sortType.sortTitle.includes("-") ? "asc" : "desc";

  useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://65ce231ac715428e8b400b24.mockapi.io/items?category=${
        categoryId > 0 ? `${categoryId}` : ""
      }&sortBy=${sortBy}&order=${order}`
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setPizzas(data);
      })
      .finally(() => {
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sortType.sortTitle]);

  return (
    <>
      <div className='content__top'>
        <Categories
          categoryId={categoryId}
          setCategoryId={setCategoryId}
        ></Categories>
        <Sort sortType={sortType} setSortType={setSortType}></Sort>
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <Catalog isLoading={isLoading} pizzas={pizzas}></Catalog>
    </>
  );
}
