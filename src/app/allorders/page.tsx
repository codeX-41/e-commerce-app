import { getUserOrders } from '@/apis/getUserOrders'
import { CartItem, Order, Orders } from '@/Types/order.type';
import Image from 'next/image';
import React from 'react'

const allorders = async () => {
    const  data:Orders  = await getUserOrders();
    console.log(data);
  return (
      <div className='md:w-[80%] mx-auto my-10 w-full px-5 md:px-0'>
          <div className="all-Orders">
              {data.map((order:Order , idx:number) => {
                  return (
                    <div key={idx} className="p-5 bg-slate-100 mb-5">
                      <div className="flex border-b-2 border-green-500 pb-5">
                        {order.cartItems.map((item: CartItem, idx: number) => {
                          return (
                            <div key={idx} className="w-1/6 me-3">
                              <Image
                                src={item.product.imageCover}
                                alt="image cover"
                                width={200}
                                height={200}
                                className="w-full"
                              />
                              <h2 className="line-clamp-1">
                                {item.product.title}
                                  </h2>
                            </div>
                          );
                        })}
                      </div>
                      <div className="mt">
                        <h2>PaymentMethodType : {order.paymentMethodType}</h2>
                        <h2>Total Order Price : {order.totalOrderPrice}</h2>
                      </div>
                    </div>
                  );
              })}
          </div>
    </div>
  )
}

export default allorders