import React from "react";
import empty from "../../assets/empty-cart.png";
import { NavLink } from "react-router-dom";

const CartEmpty: React.FC = () => {
  return (
    <div className='cart cart--empty'>
      <h2>
        Корзина пустая <span>😕</span>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={empty} />
      <NavLink to='/' className='button button--black'>
        <span>Вернуться назад</span>
      </NavLink>
    </div>
  );
};

export default CartEmpty;
