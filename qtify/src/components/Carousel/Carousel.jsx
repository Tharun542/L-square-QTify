import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

const Carousel = ({ items, renderItem }) => {
  return (
    <div className="carousel-container">
      <div className="swiper-button-prev custom-nav">
        <LeftNav />
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        loop={false}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-next custom-nav">
        <RightNav />
      </div>
    </div>
  );
};

export default Carousel;
