import axios from "axios";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "./fullpizza.module.scss";
import { Link } from "react-router-dom";

const FullPizza: React.FC = () => {
  const params = useParams();
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = params;
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://65ce231ac715428e8b400b24.mockapi.io/items/${id}`
        );

        setPizza(data);
      } catch (error) {
        alert("Ошибка при получении пиццы!");
        navigate("/");
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <p className={style.loading}>Загрузка...</p>;
  }

  return (
    <div className='container'>
      <div className={style.pizza}>
        <img src={pizza.imageUrl} alt='' />
        <h2>{pizza.title}</h2>
        <p>{pizza.price} ₽</p>
        <Link className={style.btn} to='/'>
          Вернуться назад
        </Link>
      </div>
    </div>
  );
};

export default FullPizza;
