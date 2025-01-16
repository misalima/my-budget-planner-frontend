"use client";
import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
const LoginView = () => {
  const router = useRouter();

  const goBack = () => {
    router.back(); // Navigates to the previous page in the browser history
  };

  return (
    <div className="h-full col-span-3 shadow-lg w-full flex flex-col justify-center items-center bg-blue">
      <button
        onClick={goBack}
        className="flex absolute items-center p-2 text-white rounded-3xl top-8 left-6 hover:bg-orange-600 transition"
        aria-label="Go back"
      >
        <IoMdArrowRoundBack className="text-3xl text-white " />
      </button>

      <Link href={"/"}>
        <Image
          alt="homepage-art"
          src={"/images/logo-center-white.png"}
          width={320}
          height={500}
        />
      </Link>
      <LoginForm />
    </div>
  );
};

export default LoginView;
