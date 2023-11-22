import { useState } from "react";
import "../styles/3DSlider.scss";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image1 from "../assets/images/image 42.png";
import Arrow1 from "../assets/images/Arrow 1.png";
import Arrow2 from "../assets/images/Arrow 2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderControl } from "./SliderControl";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
const images = [
  { id: "PaSZgT4R1Wg" },
  { id: "P6c28utIP_s" },
  { id: "cMA_RcZ8P8s" },
  { id: "PaSZgT4R1Wg" },
  { id: "P6c28utIP_s" },
  { id: "cMA_RcZ8P8s" },
];

function ThreeDCarousel() {
  
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <img src={Arrow1} alt="arrow-right" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <img src={Arrow2} alt="arrow-right" />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
      <iframe
        width="354.262"
        height="632"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
  return (
    // <div className="slider-container home-container">
    //   <Slider {...settings}>
    //     {images.map((img, idx) => (
    //       <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
    //         <div>
    //           <YoutubeEmbed embedId={img.id} />
    //         </div>
    //       </div>
    //     ))}
    //   </Slider>
    // </div>
    <div className="home-container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <SwiperSlide>
              <YoutubeEmbed embedId={img.id} />
            </SwiperSlide>
          </div>
        ))}
        {/* 
        <SwiperSlide>
          <img src={Image1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image1} alt="slide_image" />
        </SwiperSlide> */}

        <SliderControl images={images}/>
      </Swiper>
    </div>
  );
}

export default ThreeDCarousel;
