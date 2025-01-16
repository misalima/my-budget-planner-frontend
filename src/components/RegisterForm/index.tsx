"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

type RegisterFormInputs = {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch, 
  } = useForm<RegisterFormInputs>();

  const onSubmit = (data: RegisterFormInputs) => {
    console.log(data);
  };

  return (
    <div>
      <div>
        <div className="flex justify-center">
          <Link className="mt-4" href={"/"}>
            <Image
              src="/images/logo-center-white.png"
              alt="logo.png"
              width={270}
              height={50}
            />
          </Link>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-8 py-4 w-full max-w-md"
      >
        <h2 className="text-xl font-bold text-white text-center mb-2">
          Create an Account
        </h2>
        <p className="text-lg text-white mb-4 text-center leading-5">
          Provide us with your information to create your account...
        </p>

        {/* First Name Input */}
        <div className="mb-2">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium mb-1 text-white"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="e.g.: John"
            {...register("firstName", {
              required: "First name is required",
            })}
            className={`text-sm w-full p-3 border border-2 ${
              errors.firstName ? "border-red-500" : "border-blue"
            } rounded-lg focus:outline-none`}
          />
          {errors.firstName && (
            <span className="text-red-500 text-sm">
              {errors.firstName.message}
            </span>
          )}
        </div>

        {/* Last Name Input */}
        <div className="mb-2">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium mb-1 text-white"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="e.g.: Doe"
            {...register("lastName", {
              required: "Last name is required",
            })}
            className={`text-sm w-full p-3 border border-2 ${
              errors.lastName ? "border-red-500" : "border-blue"
            } rounded-lg focus:outline-none`}
          />
          {errors.lastName && (
            <span className="text-red-500 text-sm">
              {errors.lastName.message}
            </span>
          )}
        </div>

        {/* Username Input */}
        <div className="mb-2">
          <label
            htmlFor="username"
            className="block text-sm font-medium mb-1 text-white"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="e.g.: johndoe"
            {...register("username", {
              required: "Username is required",
            })}
            className={`text-sm w-full p-3 border border-2 ${
              errors.username ? "border-red-500" : "border-blue"
            } rounded-lg focus:outline-none`}
          />
          {errors.username && (
            <span className="text-red-500 text-sm">
              {errors.username.message}
            </span>
          )}
        </div>

        {/* Email Input */}
        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-1 text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="e.g.: johndoe@mail.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Enter a valid email address",
              },
            })}
            className={`text-sm w-full p-3 border border-2 ${
              errors.email ? "border-red-500" : "border-blue"
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
        <div className="mb-2 relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="min. 8 characters"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            className={`text-sm w-full p-3 border border-2 ${
              errors.password ? "border-red-500" : "border-blue"
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

        {/* Confirm Password Input */}
        <div className="mb-2">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium mb-1 text-white"
          >
            Confirm Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="confirmPassword"
            placeholder="repeat your password"
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            className={`text-sm w-full p-3 border border-2 ${
              errors.confirmPassword ? "border-red-500" : "border-blue"
            } rounded-lg focus:outline-none`}
          />
          {errors.confirmPassword && (
            <span className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        {/* Forgot Password Link */}
        <div className="mb-4 text-right">
          <Link href="/forgot-password">
            <p className="text-sm text-blue-500 hover:underline text-white -mt-2">
              Forgot your password?
            </p>
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full bg-orange text-white shadow-lg font-semibold py-3 rounded-lg hover:bg-orange-600 hover:shadow-xl transition duration-200"
        >
          Create account
        </button>

        {/* Register Link */}
        <div className="mt-4 text-center text-white">
          <p>
            Already have an account?{" "}
            <Link href="/login">
              <span className="text-white font-semibold hover:underline">
                Log in!
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
