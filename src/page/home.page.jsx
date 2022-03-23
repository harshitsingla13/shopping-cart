import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/action";

import { get } from "../axios-requests";
import CarouselSlider from "../components/carousel-slider/carousel-slider.component";
import CategoryBanner from "../components/category-banner/category-banner.component";

const HomePage = () => {
  const [banner, setBanner] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    get("banners")
      .then(({ data }) => setBanner(data))
      .catch((error) => console.log(error));

    get("categories")
      .then(({ data }) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  const openCategory = (categoryId) => {
    navigate("/products");
    dispatch(setFilter(categoryId));
  };

  return (
    <div>
      {banner && banner.length > 0 && (
        <CarouselSlider carouselData={banner}></CarouselSlider>
      )}
      {categories &&
        categories.length > 0 &&
        categories
          .filter((data) => data.enabled)
          .sort(function (offer1, offer2) {
            return offer1.order && offer2.order
              ? offer1.order - offer2.order
              : 0;
          })
          .map((data) => (
            <CategoryBanner
              category={data}
              key={data.key}
              openCategory={openCategory}
            />
          ))}
    </div>
  );
};

export default HomePage;
