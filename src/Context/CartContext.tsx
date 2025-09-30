import { getUserCartAction } from "@/cartActions/GetUserCart";
import { Cart } from "@/Types/Cart.type";
import React, { createContext, useEffect, useState } from "react";
import { AddToCart } from "@/cartActions/AddToCart";
import { removeCartItemAction } from "@/cartActions/RemoveCartItem";
import { updateCartAction } from "@/cartActions/UpdateCart";
import { clearCartAction } from "@/cartActions/ClearCart";
export const cartContext = createContext({});
const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [numOfCartItems, setNumOfCartItems] = useState(0);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartId, setCartId] = useState("");

  async function addProductToCart(id: string) {
    try {
      const data = await AddToCart(id);
      getUserCart();
      return data;
    } catch (error) {}
  }
  async function removeCartItem(id: string) {
    try {
      const data: Cart = await removeCartItemAction(id);
      setNumOfCartItems(data.numOfCartItems);
      setProducts(data.data.products);
      setTotalCartPrice(data.data.totalCartPrice);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async function updateCart(id: string, count: number) {
    try {
      const data = await updateCartAction(id, count);
      setNumOfCartItems(data.numOfCartItems);
      setProducts(data.data.products);
      setTotalCartPrice(data.data.totalCartPrice);
    } catch (error) {}
  }
  async function clearCart() {
    try {
      const data: Cart = await clearCartAction();
      setNumOfCartItems(0);
      setTotalCartPrice(0);
      setProducts([]);
    } catch (error) {
      
    }
  }
  function afterPayment() {
    setNumOfCartItems(0);
    setTotalCartPrice(0);
    setProducts([]);
    setCartId("");
  }
  async function getUserCart() {
    setIsLoading(true);
    try {
      const data: Cart = await getUserCartAction();
      setNumOfCartItems(data.numOfCartItems);
      setProducts(data.data.products);
      setTotalCartPrice(data.data.totalCartPrice);
      setIsLoading(false);
      setCartId(data.cartId);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }
  useEffect(function () {
    getUserCart();
  }, []);

  return (
    <cartContext.Provider
      value={{
        isLoading,
        numOfCartItems,
        products,
        totalCartPrice,
        addProductToCart,
        removeCartItem,
        updateCart,
        clearCart,
        cartId,
        afterPayment,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
