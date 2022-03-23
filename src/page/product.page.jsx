import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../redux/action";

import ProductCategory from "../components/product-category/product-category.component";
import ProductCard from "../components/product-card/product-card.component";
import { get } from "../axios-requests";
import Dropdown from "../components/dropdown/dropdown.component";

const Product = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const { filter } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    get("products").then(({ data }) => {
      setData(data);
    });
    get("categories").then(({ data }) => {
      setCategories(data);
    });
  }, []);

  const onChange = (e) => {
    console.log(e.target.value);
    const categoryId = e.target.value;
    if (categoryId === "All") {
      dispatch(setFilter(null));
    } else if (categoryId !== filter) {
      dispatch(setFilter(categoryId));
    } else {
      dispatch(setFilter(null));
    }
  };

  return (
    <main
      className="product container"
      id="products-list-container"
      role="main"
    >
      <ProductCategory category={categories} />
      <Dropdown
        options={categories}
        onChange={onChange}
        selectedValue={filter}
      />
      <section
        id="products-cards-container"
        className="product-cards-container"
      >
        <div className="product-list">
          {filter === null && data.length > 0
            ? data.map((item) => <ProductCard product={item} key={item.id} />)
            : data
                .filter((item) => item.category === filter)
                .map((item) => <ProductCard product={item} key={item.id} />)}
        </div>
      </section>
    </main>
  );
};

export default Product;
