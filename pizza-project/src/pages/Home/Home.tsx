import React from "react";
import Categories from "../../components/Categories/Categories";
import Sort, { sortTtitles } from "../../components/Sort/Sort";
import Catalog from "../../components/Catalog/Catalog";
import Pagination from "../../components/Pagination/Pagination";
import { useSelector, useDispatch } from "react-redux";
import {
  setCategoryId,
  setPage,
  setFilter,
  filterSelector,
} from "../../redux/slices/filterSlice";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { getPizzas, pizzaSelector } from "../../redux/slices/pizzasSlice";

const Home: React.FC = () => {
  const isSearch = React.useRef(false);
  const filter = useSelector(filterSelector);
  const pizzas = useSelector(pizzaSelector);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onChangeCategoryId(id: number) {
    dispatch(setCategoryId(id));
  }

  function onPageChanged(props) {
    dispatch(setPage(props.selected + 1));
  }

  async function fetchPizzas() {
    const sortBy = filter.sort.sortTitle.replace("-", "");
    const order = filter.sort.sortTitle.includes("-") ? "asc" : "desc";
    let search =
      filter.searchValue.length > 0 ? `&search=${filter.searchValue}` : "";
    let category =
      filter.categoryId === 0 ? "" : `&category=${filter.categoryId}`;
    let page = `&page=${filter.pageCount}`;

    dispatch(getPizzas({ category, sortBy, order, search, page }));
  }

  React.useEffect(() => {
    if (window.location.search) {
      const parseString = qs.parse(window.location.search.substring(1));

      const sort = sortTtitles.find(
        (obj) => obj.sortTitle === parseString.sortTitle
      );

      dispatch(setFilter({ ...parseString, sort }));

      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    const queryString = qs.stringify({
      sortTitle: filter.sort.sortTitle,
      categoryId: filter.categoryId,
      page: filter.pageCount,
    });

    navigate(`?${queryString}`);
  }, [filter.categoryId, filter.sort.title, filter.pageCount]);

  React.useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      fetchPizzas();
    }

    isSearch.current = false;
  }, [
    filter.categoryId,
    filter.sort.title,
    filter.searchValue,
    filter.pageCount,
  ]);

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
      <Catalog isLoading={pizzas.status} pizzas={pizzas.items}></Catalog>
      <Pagination onPageChanged={onPageChanged}></Pagination>
    </>
  );
};

export default Home;
