"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const AuthButton = () => {
  const session = useSession();
  //   console.log(session);
  return (
    <div>
      {session.status == "authenticated" ? (
        <>
          <button
            href={"/login"}
            onClick={() => signOut()}
            className="btn btn-primary btn-outline"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link href={"/login"} className="btn btn-primary btn-outline">
            Login
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthButton;
