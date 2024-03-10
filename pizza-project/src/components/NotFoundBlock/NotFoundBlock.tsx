import React from "react";
import style from "./notfound.module.scss";

const NotFoundBlock: React.FC = () => {
  return (
    <div className={style.warning}>
      <p>404</p>
      <p>Ничего не найдено...</p>
    </div>
  );
};

export default NotFoundBlock;
