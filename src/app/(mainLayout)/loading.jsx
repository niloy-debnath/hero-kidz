import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-sm border border-base-300 rounded-2xl overflow-hidden">
      {/* image skeleton */}
      <div className="skeleton h-56 w-full"></div>

      <div className="card-body space-y-3">
        {/* title */}
        <div className="skeleton h-5 w-3/4"></div>

        {/* subtitle */}
        <div className="skeleton h-4 w-2/3"></div>

        {/* rating row */}
        <div className="flex gap-3">
          <div className="skeleton h-4 w-12"></div>
          <div className="skeleton h-4 w-16"></div>
          <div className="skeleton h-4 w-12"></div>
        </div>

        {/* features */}
        <div className="flex gap-2">
          <div className="skeleton h-6 w-20 rounded-full"></div>
          <div className="skeleton h-6 w-20 rounded-full"></div>
          <div className="skeleton h-6 w-20 rounded-full"></div>
        </div>

        {/* price */}
        <div className="skeleton h-6 w-24"></div>

        {/* buttons */}
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="skeleton h-10 rounded-lg"></div>
          <div className="skeleton h-10 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
