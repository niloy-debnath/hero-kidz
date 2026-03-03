import { getProducts } from "@/actions/server/product";
import ProductCard from "@/app/components/cards/ProductCard";
import React from "react";

const Products = async () => {
  const products = await getProducts();

  return (
    <div className="py-10">
      <h2 className="font-bold text-4xl text-center mb-12 ">Our Products</h2>
      <div className="grid grid-cols-3 gap-10 max-w-6xl mx-auto">
        {" "}
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
