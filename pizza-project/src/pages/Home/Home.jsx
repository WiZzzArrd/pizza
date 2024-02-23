import React, { useEffect, useState } from "react";
import Categories from "../../components/Categories/Categories";
import Sort from "../../components/Sort/Sort";
import Catalog from "../../components/Catalog/Catalog";
import Pagination from "../../components/Pagination/Pagination";

export default function Home({ searchValue, selectedPage, setSelectedPage }) {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortType, setSortType] = useState({
    title: "популярности (DESC)",
    sortTitle: "rating",
  });
  const [categoryId, setCategoryId] = useState(1);

  let sortBy = sortType.sortTitle.replace("-", "");
  let order = sortType.sortTitle.includes("-") ? "asc" : "desc";
  let search = searchValue.length > 0 ? `&search=${searchValue}` : "";
  let category = categoryId === 0 ? "" : `&category=${categoryId}`;
  let page = `&page=${selectedPage}`;

  function onPageChanged(props) {
    setSelectedPage(props.selected + 1);
  }

  useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://65ce231ac715428e8b400b24.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}${page}&limit=4`
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setPizzas(data);
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch(() => {
        console.log("error");
      });

    window.scrollTo(0, 0);
  }, [categoryId, sortType.sortTitle, searchValue, selectedPage]);

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
      <Pagination onPageChanged={onPageChanged}></Pagination>
    </>
  );
}
