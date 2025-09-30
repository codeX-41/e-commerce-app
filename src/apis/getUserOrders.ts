"use server";

import { getMyToken } from "@/utilities/token";
import axios from "axios";
import { jwtDecode } from "jwt-decode";


export async function getUserOrders() {
  const token = await getMyToken();
  const { id } = jwtDecode<{ id: string }>(token);
  if (!token) {
    throw Error("Login first");
  }

  const { data } = await axios.get(
    `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`
  );
  return data;
}
