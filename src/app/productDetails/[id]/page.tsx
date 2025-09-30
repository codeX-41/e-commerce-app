
import getSingleProduct from '@/apis/SingleProduct';
import React from 'react'
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import AddBtnCard from '@/app/_components/AddBtnCard/AddBtnCard';
const page = async ({ params }) => {
  const { id } = await params;
  
  const data = await getSingleProduct(id);
  return (
    <div className="w-full px-5 md:w-[80%] md:px-0 mx-auto my-10 flex items-center flex-col md:flex-row justify-center">
      <div className="w-full md:w-1/3 ">
        <Image width={500} height={500} src={data.imageCover} alt={data.title} className="w-full" />
      </div>
      <div className="w-full md:w-2/3 px-3 m-10 md:m-0 ps-8">
        <h2 className="text-xl text-green-500 font-bold">{data.title}</h2>
        <p className="my-5">{data.description}</p>
        <p className="my-5">{data.category.name}</p>
        <div className="w-full my-5 flex justify-between items-center">
          {data.price} EGP
          <p>
            {data.ratingsAverage}{" "}
            <i className="fa-solid fa-star text-yellow-300"></i>{" "}
          </p>
        </div>
        <AddBtnCard id={data.id}/>
      </div>
    </div>
  );
}

export default page