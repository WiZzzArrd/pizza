import React from "react";
import style from "./notfound.module.scss";

export default function NotFoundBlock() {
  return (
    <div className={style.warning}>
      <p>404</p>
      <p>Ничего не найдено...</p>
    </div>
  );
}
