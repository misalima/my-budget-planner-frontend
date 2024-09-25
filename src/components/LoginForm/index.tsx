"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Link from "next/link";

type LoginFormInputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-white">Login</h2>

      {/* Email Input */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-1 text-white"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Enter a valid email address",
            },
          })}
          className={`w-full p-2 border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded focus:outline-none`}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

      {/* Password Input */}
      <label
        htmlFor="password"
        className="block text-sm font-medium mb-1 text-white"
      >
        Password
      </label>
      <div className="mb-4 relative">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          className={`w-full p-2 border ${
            errors.password ? "border-red-500" : "border-gray-300"
          } rounded focus:outline-none`}
        />
        <div
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
        >
          {showPassword ? (
            <AiFillEyeInvisible className="text-2xl" />
          ) : (
            <AiFillEye className="text-2xl" />
          )}
        </div>
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
      </div>

      {/* Forgot Password Link */}
      <div className="mb-4 text-right">
        <Link href="/forgot-password">
          <p className="text-sm text-blue-500 hover:underline text-white">
            Forgot your password?
          </p>
        </Link>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-200"
      >
        Log in
      </button>

      {/* Register Link */}
      <div className="mt-4 text-center text-white">
        <p>
          Not registered yet?{" "}
          <Link href="/register">
            <span className="text-blue-500 hover:underline">
              Create an account!
            </span>
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
