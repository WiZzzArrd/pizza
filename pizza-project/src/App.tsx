import "./scss/app.scss";
import MainLayout from "./layouts/MainLayout.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart.jsx";
import Home from "./pages/Home/Home.jsx";
import FullPizza from "./pages/FullPizza/FullPizza.tsx";

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/pizza/:id' element={<FullPizza></FullPizza>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
