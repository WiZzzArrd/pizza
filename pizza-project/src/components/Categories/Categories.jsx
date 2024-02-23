import React from "react";

export default function Categories({ categoryId, setCategoryId }) {
  const onClickCategory = (index) => {
    setCategoryId(index);
  };

  const categoriesTitle = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className='categories'>
      <ul>
        {categoriesTitle.map((text, index) => {
          return (
            <li
              key={text}
              onClick={() => onClickCategory(index)}
              className={index === categoryId ? "active" : ""}
            >
              {text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
