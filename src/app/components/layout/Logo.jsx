import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="flex gap-1 items-center">
      <Image
        src="/assets/logo.png"
        alt="logo-hero-kidz"
        height={40}
        width={50}
      ></Image>
      <h2 className="font-bold text-2xl">
        Hero<span className="text-primary font-bold">Kidz</span>
      </h2>
    </Link>
  );
};

export default Logo;
