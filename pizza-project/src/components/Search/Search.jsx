import React from "react";
import style from "./search.module.scss";
import search from "../../assets/search.jpg";
import krest from "../../assets/krest.png";
import { SearchContext } from "../../context/context.js";
import debounce from "lodash.debounce";

export default function Search() {
  const { setSearchValue } = React.useContext(SearchContext);
  const [value, setValue] = React.useState("");

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 200),
    []
  );

  const inputRef = React.useRef();

  function resetValueHandler() {
    setValue("");
    setSearchValue("");
    inputRef.current.focus();
  }

  function onChangeInputHandler(e) {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  }

  return (
    <div className={style.root}>
      <img className={style.icon} src={search} alt='search' />
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => onChangeInputHandler(e)}
        className={style.input}
        placeholder='Поиск...'
      ></input>
      {value && (
        <img
          onClick={resetValueHandler}
          className={style.krest}
          src={krest}
        ></img>
      )}
    </div>
  );
}
