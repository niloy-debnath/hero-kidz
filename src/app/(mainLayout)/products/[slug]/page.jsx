"use client";

import Image from "next/image";
import { useMemo, use, useEffect, useState } from "react";
import products from "../../../data/toys.json";
import { FaStar, FaShoppingCart } from "react-icons/fa";

export const slugify = (str = "") =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export default function ProductDetails({ params }) {
  const { slug } = use(params);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // local json instantly load hoy, tai demo skeleton dekhar jonno simulate
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  const product = products.find((p) => slugify(p.title) === slug);

  if (!product) return <p className="text-center mt-10">Product not found</p>;

  const {
    title,
    bangla,
    image,
    price,
    ratings,
    reviews,
    sold,
    description,
    info,
  } = product;

  const discount = product.discount ?? product.percentage ?? 0;

  // honestly useMemo not needed here, but keeping it:
  // const finalPrice = useMemo(() => {
  //   const p = Number(price || 0);
  //   const d = Number(discount || 0);
  //   return Math.round(p - (p * d) / 100);
  // }, [price, discount]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden border">
          <Image src={image} alt={title} fill className="object-cover" />
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
            {/* <p className="text-3xl font-bold text-primary">৳{finalPrice}</p> */}

            {discount > 0 && (
              <p className="line-through text-gray-400">৳{price}</p>
            )}

            {discount > 0 && (
              <span className="badge badge-success">{discount}% OFF</span>
            )}
          </div>

          <div className="space-y-2">
            {info?.map((item, i) => (
              <div key={i} className="badge badge-outline mr-2">
                {item}
              </div>
            ))}
          </div>

          <button className="btn btn-primary gap-2 mt-4">
            <FaShoppingCart />
            Add to Cart
          </button>
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
