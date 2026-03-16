"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter, useSearchParams } from "next/navigation";
import GoogleBtn from "../buttons/GoogleBtn";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const param = useSearchParams();

  const onSubmit = async (data) => {
    // console.log(data);
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      callbackUrl: param.get("callbackUrl"),
    });
    console.log(result);
    if (!result.ok) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email & Password didn't match!",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Congratulation",
        text: "Welcome Back",
      });
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-300">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                {...register("email")}
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                {...register("password")}
              />
            </div>

            {/* Login Button */}
            <button type="submit" className="btn btn-primary w-full mt-2">
              Login
            </button>
          </form>
          <GoogleBtn></GoogleBtn>

          {/* Register Link */}
          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <Link href="/register" className="text-primary font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
