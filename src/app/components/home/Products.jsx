"use client";

import React, { useEffect, useState } from "react";
import products from "../../data/toys.json";
import ProductCard from "../cards/ProductCard";
import ProductCardSkeleton from "@/app/(mainLayout)/loading";

const ProductsPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ local json instantly load hoy, tai demo/loading dekhar jonno simulate
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="">
      <h2 className="font-bold text-center text-4xl mb-4">Our Products</h2>

      {/* ✅ same grid as your products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading
          ? Array.from({ length: products.length }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))
          : products.map((product) => (
              <ProductCard key={product.title} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ProductsPage;
