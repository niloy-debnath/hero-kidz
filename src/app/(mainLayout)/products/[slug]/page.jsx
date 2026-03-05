// ❌ remove "use client"

import Image from "next/image";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { getSingleProduct } from "@/actions/server/product";
import Add2Cart from "@/app/components/buttons/Add2Cart";

export default async function ProductDetails({ params }) {
  const { slug } = await params;

  const product = await getSingleProduct(slug);

  if (!product) return null;

  const {
    image,
    title,
    bangla,
    ratings,
    reviews,
    sold,
    price,
    discount,
    percentage,
    info,
    description,
  } = product;

  const off = discount ?? percentage ?? 0;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden border">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-gray-500">{bangla}</p>

          <div className="flex items-center gap-3">
            <FaStar className="text-yellow-500" />
            <span>{ratings}</span>
            <span className="text-gray-500">
              {reviews} reviews • {sold} sold
            </span>
          </div>

          <div className="flex items-center gap-4">
            {off > 0 && <p className="line-through text-gray-400">৳{price}</p>}
            {off > 0 && <span className="badge badge-success">{off}% OFF</span>}
          </div>

          <div className="space-y-2">
            {info?.map((item, i) => (
              <div key={i} className="badge badge-outline mr-2">
                {item}
              </div>
            ))}
          </div>

          <Add2Cart product={product}></Add2Cart>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Description</h2>
        {String(description || "")
          .split("\n")
          .map((p, i) => (
            <p key={i} className="mb-3 text-gray-600">
              {p}
            </p>
          ))}
      </div>
    </div>
  );
}
