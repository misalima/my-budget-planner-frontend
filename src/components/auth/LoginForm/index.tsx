"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import { loginUser } from "@/app/api/apiService";


type LoginFormInputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const { user, tokens } = await loginUser(data);
      console.log("Usuário logado com sucesso:", user);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold text-white text-center mb-3">Login</h2>
      <p className="text-lg font-medium text-white text-center mb-3 leading-6">
        Welcome back! Enter your information to access your account.
      </p>

      {/* Email Input */}
      <div className="mb-4 mt-4">
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
          placeholder="Your email here"
          className={`w-full p-3 border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded-lg focus:outline-none`}
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
          placeholder="Your password here"
          className={`w-full p-3 border ${
            errors.password ? "border-red-500" : "border-gray-300"
          } rounded-lg focus:outline-none`}
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
      <div className="-mt-2 mb-4 text-right">
        <Link href="/forgot-password">
          <p className="text-sm text-blue-500 hover:underline text-white">
            Forgot your password?
          </p>
        </Link>
      </div>

      {/* Submit Button */}
      { error && <p className="text-red-500 text-sm mb-4">{error}</p>

      }
      <button
        type="submit"
        className="mt-4 w-full bg-orange text-white shadow-lg font-semibold py-3 rounded-lg hover:bg-orange-600 hover:shadow-xl transition duration-200"
      >
        Log in
      </button>

      {/* Register Link */}
      <div className="mt-4 text-center text-white">
        <p>
          Don&apos;t have an account?{" "}
          <Link href="/register">
            <span className="text-white font-semibold hover:underline">
              Sign up!
            </span>
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
