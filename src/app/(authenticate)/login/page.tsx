"use client";
import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginView = () => {
  return (
    <div className="h-full col-span-3 shadow-lg w-full flex flex-col justify-center items-center bg-blue">
      <Link href={"/home"}>
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
