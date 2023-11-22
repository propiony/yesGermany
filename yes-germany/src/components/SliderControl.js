import { useState } from "react";
import Arrow1 from "../assets/images/Arrow 1.png";
import Arrow2 from "../assets/images/Arrow 2.png";
export const SliderControl = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  return (
    <div className="slider-controler">
      <div
        className="swiper-button-prev slider-arrow"
        onClick={() => {
          if (currentSlide > 1) setCurrentSlide(currentSlide - 1);
          if(currentSlide===1) setCurrentSlide(images.length)
        }}
      >
        <div className="arrow prev">
          <img src={Arrow2} alt="arrow-right" />
        </div>
      </div>
      <div className="count">{currentSlide}/{images.length}</div>
      <div
        className="swiper-button-next slider-arrow"
        onClick={() => {
          console.log("here");
          debugger
          if(currentSlide < images.length) setCurrentSlide(currentSlide + 1);
          if(currentSlide===images.length) setCurrentSlide(1)
        }}
      >
        <div className="arrow prev">
          <img src={Arrow1} alt="arrow-right" />
        </div>
      </div>
    </div>
  );
};
