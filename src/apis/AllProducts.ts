
import { Product } from './../Types/Products.type';

export default async function getAllProducts() {
  const response = await fetch("http://localhost:3000/api/users");
  const { data } = await response.json();
  return data;
}
