import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { Product } from '@/Types/Products.type';
import AddBtnCard from '../AddBtnCard/AddBtnCard';

const HomeCard = ({product}:{product:Product}) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4  2xl:w-1/6 p-3">
      <Link href={`/productDetails/${product.id}`}>
        <div className="inner">
          <Card className="p-2 gap-2">
            <CardHeader className="px-0">
              <Image
                width={500}
                height={500}
                src={product.imageCover}
                alt={product.title}
              />
            </CardHeader>
            <CardContent className="px-0">
              <p className="font-bold mb-3 text-green-500">
                {product.category.name}
              </p>
              <p className="line-clamp-1">{product.title}</p>
            </CardContent>
            <CardFooter className="px-0">
              <div className="w-full flex justify-between items-center">
                {product.price} EGP
                <p>
                  {product.ratingsAverage}{" "}
                  <i className="fa-solid fa-star text-yellow-300"></i>{" "}
                </p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </Link>
      <AddBtnCard id={product.id} />
    </div>
  );
}

export default HomeCard