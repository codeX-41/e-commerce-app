import getAllProducts from "@/apis/AllProducts";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { log } from "console";
import HomeCard from "@/app/_components/HomeCard/HomeCard";
import MainSlider from "./_components/MainSlider/MainSlider";
import CategorySlide from "./_components/CategorySlide/CategorySlide";
import { Product } from "@/Types/Products.type";
export default async function Home() {

  const data:Product[] = await getAllProducts()

  return (
    <>
      <section className="px-5 md:px-0 my-10 w-full md:w-[80%] mx-auto">
        <MainSlider />
        <CategorySlide/>
        <div className="flex flex-wrap">
          {data.map((product:Product, idx:number) => (
            <HomeCard key={idx} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
