import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default function ImageSlide() {
  const url = "http://localhost:8000/";
  const slides = [
    {
      id: 1,
      image: "images/home/money.jpg",
      alt: "Image 1",
    },
    { id: 2, image: "images/home/property.jpg", alt: "Image 2" },
    { id: 3, image: url + "images/sewa/promotion/rent.jpg", alt: "Image 3" },
  ];

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
              alt={slide.alt}
              className="w-full h-64 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
