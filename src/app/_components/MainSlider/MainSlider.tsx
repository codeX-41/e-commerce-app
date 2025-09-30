"use client";
import React from "react";
import banner1 from "@/assets/screens/slider/grocery-banner.png";
import banner2 from "@/assets/screens/slider/grocery-banner-2.jpeg";
import slider1 from "@/assets/screens/slider/slider-image-1.jpeg";
import slider2 from "@/assets/screens/slider/slider-image-2.jpeg";
import slider3 from "@/assets/screens/slider/slider-image-3.jpeg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
const MainSlider = () => {
  return (
    <div className="mb-8 flex ">
      <div className="w-2/3 ">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            {" "}
            <Image
              src={slider1}
              alt="Slider1"
              className="h-[400px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={slider2}
              alt="Slider2"
              className="h-[400px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={slider3}
              alt="Slider3"
              className="h-[400px] object-cover"
            />
          </SwiperSlide>
          
        </Swiper>
      </div>
      <div className="w-1/3 ">
        <Image
          src={banner1}
          alt="Slider banner1"
          className="h-[200px] object-cover"
        />
        <Image
          src={banner2}
          alt="Slider banner2"
          className="h-[200px] object-cover"
        />
      </div>
    </div>
  );
};

export default MainSlider;
