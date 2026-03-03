import { getProducts } from "@/actions/server/product";
import React from "react";
import ProductCard from "../cards/ProductCard";

const Products = async () => {
  const products = await getProducts();
  // console.log(products);
  return (
    <div>
      <h2 className="text-center font-bold text-4xl">Our Products</h2>
      <div className="grid grid-cols-3 gap-10 max-w-6xl mx-auto">
        {" "}
        {products.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
