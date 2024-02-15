import React, { useState } from "react";

export default function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index);
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
              className={index === activeIndex ? "active" : ""}
            >
              {text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
