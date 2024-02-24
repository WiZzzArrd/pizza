import React, { useContext } from "react";
import style from "./search.module.scss";
import search from "../../assets/search.jpg";
import krest from "../../assets/krest.png";
import { SearchContext } from "../../context/context.js";
export default function Search() {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  return (
    <div className={style.root}>
      <img className={style.icon} src={search} alt='search' />
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={style.input}
        placeholder='Поиск...'
      ></input>
      {searchValue && (
        <img
          onClick={() => setSearchValue("")}
          className={style.krest}
          src={krest}
        ></img>
      )}
    </div>
  );
}
