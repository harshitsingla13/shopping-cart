import { useCallback } from "react";
import "./category-banner.styles.css";

const CategoryBanner = ({ category, openCategory }) => {
  const handleCategory = useCallback(
    (id) => () => {
      openCategory(id);
    },
    [openCategory]
  );
  return (
    <div className="banner-component">
      <div className="image-container">
        <img
          src={category.imageUrl}
          alt={category.name}
          className="banner-image"
        />
      </div>
      <div className="content">
        <h2 className="heading">{category.name}</h2>
        <p className="desc">{category.description}</p>
        <button className="link-button" onClick={handleCategory(category.id)}>
          Explore {category.key}
        </button>
      </div>
    </div>
  );
};

export default CategoryBanner;
