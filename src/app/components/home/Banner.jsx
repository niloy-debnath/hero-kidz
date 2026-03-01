import { banglaFont } from "@/app/(mainLayout)/layout";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="flex items-center justify-between ">
        {/* left side */}
        <div className="flex-1 space-y-2">
          <h2
            className={`${banglaFont.className} text-6xl font-bold leading-17`}
          >
            আপনার শিশুকে দিন <br />
            <span className="text-primary">সুন্দর ভবিষ্যৎ</span>
          </h2>
          <p>Buy every toys with up to 16% discounts</p>
          <button className="btn btn-outline btn-primary">Explore more</button>
        </div>
        {/* Right Side */}
        <div className="flex-1">
          <Image
            height={400}
            width={500}
            src={"/assets/hero.png"}
            alt="Buy every toys with up to 16% discounts"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
