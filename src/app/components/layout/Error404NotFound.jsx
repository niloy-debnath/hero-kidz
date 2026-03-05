import Image from "next/image";
import React from "react";
import error from "../../../../public/assets/error404.png";
import Link from "next/link";

const Error404NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <Image src={error} alt="404" width={700} height={800}></Image>
      <Link href={"/"}>
        <button className="btn btn-primary">Back to Home</button>
      </Link>
    </div>
  );
};

export default Error404NotFound;
