import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <h2>Slideshow</h2>
      <Slider {...settings}>
        <div>
          <img src="https://via.placeholder.com/800x400?text=Slide+1" alt="Slide 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400?text=Slide+2" alt="Slide 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400?text=Slide+3" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Slideshow;
