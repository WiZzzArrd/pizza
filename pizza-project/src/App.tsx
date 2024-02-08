import "./scss/app.scss";
import Header from "./components/Header/Header.jsx";
import Sort from "./components/Sort/Sort.jsx";
import Categories from "./components/Categories/Categories.jsx";
import Catalog from "./components/Catalog/Catalog.jsx";

function App() {
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
          <Catalog></Catalog>
        </div>
      </div>
    </div>
  );
}

export default App;
