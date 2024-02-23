import "./scss/app.scss";
import Header from "./components/Header/Header.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart.jsx";
import Home from "./pages/Home/Home.jsx";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedPage, setSelectedPage] = useState(1);

  return (
    <div className='wrapper'>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      ></Header>

      <div className='content'>
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <Home
                  searchValue={searchValue}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                ></Home>
              }
            ></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
