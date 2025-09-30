import getAllCategories from '@/apis/Categories'
import React from 'react'
import SwiperSlider from '../SwiperSlider/SwiperSlider';
import { Category } from '@/Types/Products.type';


const CategorySlide = async () => {
    const data:Category[] = await getAllCategories();
  return (
      <div className='mb-3 '>
          <SwiperSlider categories={data} />
    </div>
  )
}

export default CategorySlide