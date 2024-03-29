import React from "react";

type CategoriesProps = {
  categoryId: number;
  setCategoryId: (id: number) => void;
};

const Categories: React.FC<CategoriesProps> = React.memo(
  ({ categoryId, setCategoryId }) => {
    const categoriesTitle = [
      "Все",
      "Мясные",
      "Вегетарианская",
      "Гриль",
      "Острые",
      "Закрытые",
    ];

    const onClickCategory = (index: number) => {
      setCategoryId(index);
    };

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
);

export default Categories;
