import React from "react";
import style from "./search.module.scss";
import search from "../../assets/search.jpg";
import krest from "../../assets/krest.png";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";

const Search: React.FC = () => {
  const [value, setValue] = React.useState("");

  const dispatch = useDispatch();

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 250),
    []
  );

  const inputRef = React.useRef<HTMLInputElement>(null);

  function resetValueHandler() {
    setValue("");
    dispatch(setSearchValue(""));

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  function onChangeInputHandler(e: any) {
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
};

export default Search;
