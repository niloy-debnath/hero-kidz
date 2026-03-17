"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const AuthButton = () => {
  const { data: session, status } = useSession();

  return (
    <div className="flex items-center gap-2">
      {status === "authenticated" && (
        <p className="bg-primary/10 rounded-3xl px-4 py-2">
          {session?.user?.name}
        </p>
      )}

      {status === "authenticated" ? (
        <button
          onClick={() => signOut()}
          className="btn btn-primary btn-outline"
        >
          Logout
        </button>
      ) : (
        <Link href={"/login"} className="btn btn-primary btn-outline">
          Login
        </Link>
      )}
    </div>
  );
};

export default AuthButton;
