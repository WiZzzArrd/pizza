import React from "react";
import Categories from "../../components/Categories/Categories";
import Sort from "../../components/Sort/Sort";
import Catalog from "../../components/Catalog/Catalog";
import Pagination from "../../components/Pagination/Pagination";
import { SearchContext } from "../../context/context";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setPage } from "../../redux/slices/filterSlice";
import axios from "axios";

export default function Home() {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const filter = useSelector((state) => state.filter);

  const { searchValue } = React.useContext(SearchContext);

  const dispatch = useDispatch();

  function onChangeCategoryId(id) {
    dispatch(setCategoryId(id));
  }

  function onPageChanged(props) {
    dispatch(setPage(props.selected + 1));
  }

  let sortBy = filter.sort.sortTitle.replace("-", "");
  let order = filter.sort.sortTitle.includes("-") ? "asc" : "desc";
  let search = searchValue.length > 0 ? `&search=${searchValue}` : "";
  let category =
    filter.categoryId === 0 ? "" : `&category=${filter.categoryId}`;
  let page = `&page=${filter.pageCount}`;

  React.useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        `https://65ce231ac715428e8b400b24.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}${page}&limit=4`
      )
      .then(({ data } = data) => setPizzas(data))
      .finally(() => setIsLoading(false))
      .catch(() => console.log("error"));

    window.scrollTo(0, 0);
  }, [filter.categoryId, filter.sort.title, searchValue, filter.pageCount]);

  return (
    <>
      <div className='content__top'>
        <Categories
          categoryId={filter.categoryId}
          setCategoryId={onChangeCategoryId}
        ></Categories>
        <Sort></Sort>
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <Catalog isLoading={isLoading} pizzas={pizzas}></Catalog>
      <Pagination onPageChanged={onPageChanged}></Pagination>
    </>
  );
}
