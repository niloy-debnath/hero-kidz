"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Add2Cart = ({ product }) => {
  const isLogin = false;
  const router = useRouter();
  const path = usePathname();
  const handleAdd2Cart = () => {
    // alert("btn clicked");
    if (isLogin) {
      alert(`${product._id}`);
    } else {
      router.push(`/login?callbackUrl=${path}`);
    }
  };
  return (
    <div>
      <button onClick={handleAdd2Cart} className="btn btn-primary gap-2 ">
        <FaShoppingCart />
        Add to Cart
      </button>
    </div>
  );
};

export default Add2Cart;
