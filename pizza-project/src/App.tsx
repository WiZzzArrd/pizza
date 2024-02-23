import "./scss/app.scss";
import Header from "./components/Header/Header.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart.jsx";
import Home from "./pages/Home/Home.jsx";

function App() {
  return (
    <div className='wrapper'>
      <Header></Header>

      <div className='content'>
        <div className='container'>
          <Routes>
            <Route path='/' Component={Home}></Route>
            <Route path='/cart' Component={Cart}></Route>
            <Route path='*' Component={NotFound}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
