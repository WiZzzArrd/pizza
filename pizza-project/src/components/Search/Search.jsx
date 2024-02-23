import React from "react";
import style from "./search.module.scss";
import search from "../../assets/search.jpg";
import krest from "../../assets/krest.png";

export default function Search({ searchValue, setSearchValue }) {
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
