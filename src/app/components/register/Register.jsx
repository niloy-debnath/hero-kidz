"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { postUser } from "@/actions/server/auth";
import { useRouter } from "next/navigation";
import GoogleBtn from "../buttons/GoogleBtn";

const Register = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const result = await postUser(data);
    if (result.acknowledged) {
      alert("Account created Successfully,Please Login");
      router.push("/login");
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-300">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
            {/* Email */}
            <input
              type="email"
              placeholder="email"
              className="input input-bordered w-full"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            {/* Register Button */}
            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
            {/* Google */}
            <GoogleBtn></GoogleBtn>
          </form>

          {/* Login Link */}
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
