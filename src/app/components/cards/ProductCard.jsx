"use client";

import Image from "next/image";
import { useMemo } from "react";
import { FaStar, FaRegHeart, FaCartPlus } from "react-icons/fa";

export default function ProductCard({ product }) {
  const {
    title,
    bangla,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
    info = [],
  } = product;

  const finalPrice = useMemo(() => {
    const p = Number(price || 0);
    const d = Number(discount || 0);
    return Math.round(p - (p * d) / 100);
  }, [price, discount]);

  return (
    <div className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-xl transition rounded-2xl overflow-hidden">
      {/* IMAGE */}
      <figure className="relative h-56 bg-base-200">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
          priority={false}
        />

        {/* Discount badge */}
        {discount > 0 && (
          <div className="badge badge-neutral gap-1 absolute left-3 top-3 px-3 py-3">
            <span className="font-semibold">{discount}% OFF</span>
          </div>
        )}

        {/* Wishlist */}
        <button
          className="btn btn-circle btn-sm absolute right-3 top-3 bg-base-100/80 border-base-300 hover:bg-base-100"
          aria-label="Add to wishlist"
          type="button"
        >
          <FaRegHeart />
        </button>
      </figure>

      {/* BODY */}
      <div className="card-body p-4">
        {/* Titles */}
        <div className="space-y-1">
          <h2 className="card-title text-base md:text-lg line-clamp-1">
            {title}
          </h2>
          {bangla && (
            <p className="text-sm text-base-content/70 line-clamp-1">
              {bangla}
            </p>
          )}
        </div>

        {/* Rating row */}
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="badge badge-outline gap-1">
            <FaStar className="text-warning" />
            <span className="font-semibold">
              {Number(ratings || 0).toFixed(1)}
            </span>
          </span>

          <span className="text-base-content/70">{reviews} reviews</span>
          <span className="text-base-content/70">{sold} sold</span>
        </div>

        {/* Price */}
        <div className="mt-1 flex items-end justify-between">
          <div>
            <p className="text-xs text-base-content/60">Price</p>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-extrabold">৳{finalPrice}</p>
              {discount > 0 && (
                <p className="text-sm line-through text-base-content/50">
                  ৳{price}
                </p>
              )}
            </div>
          </div>

          <span className="badge badge-success badge-outline">In stock</span>
        </div>

        {/* Actions */}
        <div className="card-actions mt-3 grid grid-cols-2 gap-2">
          <button className="btn btn-outline rounded-xl" type="button">
            View Details
          </button>

          <button className="btn btn-primary rounded-xl gap-2" type="button">
            <FaCartPlus />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
