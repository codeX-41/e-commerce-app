"use client"
import { AddToCart } from '@/cartActions/AddToCart';
import { Button } from '@/components/ui/button';
import { cartContext } from '@/Context/CartContext';
import React, { useContext } from 'react'
import { toast } from 'sonner';


const AddBtnCard = ({ id }: { id: string }) => {
  const { addProductToCart } = useContext(cartContext);
    async function handleAddToCart() {
        const data = await addProductToCart(id);
        if (data.status == "success") {
            toast.success(data.message, {
                position: 'top-center',
                duration:1000,
            })
        } else {
            toast.error("faild to add Product", {
                position: 'top-center',
                duration:1000,
            })
        }
    }
  return (
    <div>
      <Button onClick={handleAddToCart} className="w-full my-4" variant="default">
        Add To Cart
      </Button>
    </div>
  );
}

export default AddBtnCard