import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default function ImageSlide({ slides }) {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <Swiper
        className="swiper-navigation-custom"
        modules={[Navigation, Autoplay]}
        spaceBetween={40}
        slidesPerView={2}
        navigation={{
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          hideOnClick: false,
          navigationDisabledClass: "swiper-navigation-disabled",
          lockClass: "swiper-button-lock",
        }}
        autoplay={{ delay: 4000, disableOnInteraction: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.image}
              className="w-full h-64 object-cover"
              alt="Promotion"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
