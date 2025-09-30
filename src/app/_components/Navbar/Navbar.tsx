"use client";
import React, { useContext } from "react";
import Image from "next/image";
import logo from "./../../../assets/screens/freshcart-logo.svg";
import User from "@/assets/screens/user-svgrepo-com.svg";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { cartContext } from "@/Context/CartContext";
import { Badge } from "@/components/ui/badge";
const Navbar = () => {
  const { data: session, status } = useSession();
  const { numOfCartItems } = useContext(cartContext);
  return (
    <>
      <nav className="flex w-full md-w-[80%] px-14 mx-auto  justify-between items-center  py-5 bg-slate-100">
        <div className="links flex items-center gap-10">
          <div className="logo">
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          <ul className="flex flex-col md:flex-row text-center gap-5">
            {status === "authenticated" && (
              <>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/products">Products</Link>
                </li>
                <li>
                  <Link href="/categories">Categories</Link>
                </li>
                <li>
                  <Link href="/brands">Brands</Link>
                </li>
                <li>
                  <Link href="/allorders">All Orders</Link>
                </li>
                <li className="relative">
                  <Link href="/cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <Badge className="absolute -top-[80%] -right-[60%]">
                      <Link href="/">{numOfCartItems}</Link>
                    </Badge>
                  </Link>
                </li>
              </>
            )}
            {status === "loading" && <h1>Loading...</h1>}
            {status === "unauthenticated" && <Image src={logo} alt="logo" />}
          </ul>
        </div>
        <div className="icons flex gap-10 items-center">
          <ul className="flex justify-center md:justify-start flex-col md:flex-row text-center gap-4">
            <li>
              <i className="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i className="fa-brands fa-facebook"></i>
            </li>
            <li>
              <i className="fa-brands fa-tiktok"></i>
            </li>
            <li>
              <i className="fa-brands fa-twitter"></i>
            </li>
          </ul>
          <div className="register gap-3 flex flex-col md:flex-row text-center">
            {status === "authenticated" && (
              <>
                <div className="flex flex-col items-center px-3">
                  <Image width={30} height={30} src={User} alt="User Logo" />
                  <span className="font-bold text-green-600">
                    {session.user?.name}
                  </span>
                </div>
                <button
                  className="cursor-pointer"
                  onClick={() => {
                    signOut({
                      callbackUrl: "/login",
                    });
                  }}
                >
                  Logout
                </button>
              </>
            )}
            {status === "unauthenticated" && (
              <>
                <Link href="/register">Register</Link>
                <Link href="/login">Login</Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
