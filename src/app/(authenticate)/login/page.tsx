"use client";
import LoginForm from "@/components/LoginForm";
import React from "react";

const LoginView = () => {
  return (
    <div className="h-full col-span-3 shadow-lg w-full flex justify-center items-center bg-blue">
      <LoginForm />
    </div>
  );
};

export default LoginView;
