import React from "react";
import products from "../../data/toys.json";
import ProductCard from "../cards/ProductCard";

const ProductsPage = () => {
  return (
    <div className="">
      <h2 className="font-bold text-center text-4xl mb-4"> Our Products</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.title} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
