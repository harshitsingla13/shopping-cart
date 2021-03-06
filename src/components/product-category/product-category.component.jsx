import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setFilter } from "../../redux/action";

import "./product-category.styles.css";

const ProductCategory = ({ category }) => {
  const { filter } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleFilter = (categoryId) => () => {
    if (categoryId !== filter) {
      dispatch(setFilter(categoryId));
    } else {
      dispatch(setFilter(null));
    }
  };

  return (
    <aside className="product-category">
      <ul>
        {category.length
          ? category.map(
              (item) =>
                item.enabled && (
                  <li
                    key={item.id}
                    style={{ color: item.id === filter ? "red" : "black" }}
                    onClick={handleFilter(item.id)}
                  >
                    {item.name}
                  </li>
                )
            )
          : null}
      </ul>
    </aside>
  );
};

export default ProductCategory;
