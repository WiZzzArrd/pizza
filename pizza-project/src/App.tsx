import "./scss/app.scss";
import Header from "./components/Header/Header.jsx";
import Sort from "./components/Sort/Sort.jsx";
import Categories from "./components/Categories/Categories.jsx";
import Catalog from "./components/Catalog/Catalog.jsx";
import { useEffect, useState } from "react";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://65ce231ac715428e8b400b24.mockapi.io/items")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setPizzas(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className='wrapper'>
      <Header></Header>

      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories></Categories>
            <Sort></Sort>
          </div>
          <h2 className='content__title'>Все пиццы</h2>
          <Catalog isLoading={isLoading} pizzas={pizzas}></Catalog>
        </div>
      </div>
    </div>
  );
}

export default App;
