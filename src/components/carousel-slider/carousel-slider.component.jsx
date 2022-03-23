import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel-slider.styles.css";

const CarouselSlider = ({ carouselData }) => {
  const settings = {
    infinite: true,
    dots: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    lazyLoad: true,
  };
  return (
    <React.Fragment>
      <Slider {...settings}>
        {carouselData
          .filter((data) => data.isActive)
          .sort(function (offer1, offer2) {
            return offer1.order && offer2.order
              ? offer1.order - offer2.order
              : 0;
          })
          .map((data) => (
            <div key={data.id}>
              <img src={data.bannerImageUrl} alt={data.bannerImageAlt} />
            </div>
          ))}
      </Slider>
    </React.Fragment>
  );
};

export default CarouselSlider;
