import "./scss/app.scss";
import Header from "./components/Header/Header.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart.jsx";
import Home from "./pages/Home/Home.jsx";
import { useState } from "react";
import { SearchContext } from "./context/context.js";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const value = useSelector((store) => store.filter.value);
  const dispatch = useDispatch();

  return (
    <div className='wrapper'>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header></Header>

        <div className='content'>
          <div className='container'>
            <Routes>
              <Route
                path='/'
                element={<Home searchValue={searchValue}></Home>}
              ></Route>
              <Route path='/cart' element={<Cart></Cart>}></Route>
              <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
