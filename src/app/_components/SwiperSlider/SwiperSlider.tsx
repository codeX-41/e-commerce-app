"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Category } from "@/Types/Products.type";
const SwiperSlider = ({categories}:{categories:Category[]}) => {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {categories.map((category, idx) => (
          <SwiperSlide key={idx}>
            <Image
              width={500}
              height={500}
              src={category.image}
              className="h-[200px] object-cover"
              alt="category image"
            />
            <p className="my-3 mx-8">{category.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
