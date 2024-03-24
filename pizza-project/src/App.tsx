import "./scss/app.scss";
import MainLayout from "./layouts/MainLayout.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import React from "react";

const Cart = React.lazy(() => import("./pages/Cart/Cart.jsx"));
const FullPizza = React.lazy(() => import("./pages/FullPizza/FullPizza.tsx"));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound.jsx"));

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Home></Home>}></Route>
        <Route
          path='/cart'
          element={
            <React.Suspense fallback={<div>Идет загрузка корзины...</div>}>
              <Cart></Cart>
            </React.Suspense>
          }
        ></Route>
        <Route
          path='/pizza/:id'
          element={
            <React.Suspense fallback={<div> Идет загрузка пиццы...</div>}>
              <FullPizza></FullPizza>
            </React.Suspense>
          }
        ></Route>
        <Route
          path='*'
          element={
            <React.Suspense fallback={<div>Загрузка...</div>}>
              <NotFound></NotFound>
            </React.Suspense>
          }
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
