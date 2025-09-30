"use client"
import { cartContext } from '@/Context/CartContext'
import { getMyToken } from '@/utilities/token'
import React, { useContext } from 'react'
import Loading from './../Loading';
import { Button } from '@/components/ui/button';
import { ProductCart } from '@/Types/Cart.type';
import Image from 'next/image';
import { toast } from 'sonner';
import Link from 'next/link';

const cart = () => {


  const {
    isLoading,
    products,
    totalCartPrice,
    removeCartItem,
    updateCart,
    clearCart,
  } = useContext(cartContext);
  
  if (isLoading) {
    return <Loading/>
  }
  if (products.length == 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl text-red-600 font-bold">No Items </h1>
      </div>
    );
  } 

  async function removeItem(id:string) {
    const data = await removeCartItem(id);
            if (data.status == "success") {
                toast.success("success", {
                    position: 'top-center',
                    duration:1000,
                })
            } else {
                toast.error("faild to remove Product", {
                    position: 'top-center',
                    duration:1000,
                })
            }
  }


  return (
    <div className="w-full md:w-[80%] mx-auto my-10 px-5 md:px-0 bg-slate-100">
      <div className="p-5">
        <h1 className="text-2xl font-bold">Shop Cart:</h1>
        <p className="my-3 text-green-700 font-mono">
          Total Price :{totalCartPrice}
        </p>
        <Button onClick={clearCart} className="mb-10">
          Clear Cart
        </Button>
        <Button className="mb-10 ms-4">
          <Link href="/payment">Buy Now</Link>
        </Button>
        <div className="all-products">
          {products.map((product: ProductCart, idx: number) => {
            return (
              <div
                key={idx}
                className="flex items-center justify-between py-3 border-b-[1px] border-green-700/35"
              >
                <div className="flex items-center gap-5">
                  <div>
                    <Image
                      src={product.product.imageCover}
                      alt="product-image"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div>
                    <h1>{product.product.title}</h1>
                    <p className="my-3 text-green-700">
                      Price : {product.price}
                    </p>
                    <Button onClick={() => removeItem(product.product.id)}>
                      Remove
                    </Button>
                  </div>
                </div>
                <div className="text-center">
                  <Button
                    onClick={() => {
                      updateCart(product.product.id, product.count + 1);
                    }}
                  >
                    +
                  </Button>
                  <p>{product.count}</p>
                  <Button
                    onClick={() => {
                      updateCart(product.product.id, product.count - 1);
                    }}
                  >
                    -
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default cart