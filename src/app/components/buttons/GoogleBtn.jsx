"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";

const GoogleBtn = () => {
  const param = useSearchParams();

  const handleSignIN = async () => {
    const callbackUrl = param.get("callbackUrl") || "/";

    // Google login → always redirect
    await signIn("google", {
      callbackUrl,
    });
  };

  return (
    <div>
      <button
        onClick={handleSignIN}
        className="btn w-full bg-white text-black border-[#e5e5e5]"
      >
        {/* SVG same */}
        Login with Google
      </button>
    </div>
  );
};

export default GoogleBtn;
