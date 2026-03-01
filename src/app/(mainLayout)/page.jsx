import Image from "next/image";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";

export default function Home() {
  return (
    <div className="space-y-10">
      <Banner></Banner>
      <Products></Products>
    </div>
  );
}
