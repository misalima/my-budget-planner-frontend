"use client"
import { registerUser } from "@/app/api/apiService";
import RegisterForm from "@/components/auth/RegisterForm";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const RegisterView: React.FC = () => {
 
  const router = useRouter();

  const goBack = () => {
    router.back(); // Navigates to the previous page in the browser history
  };


  return (
    <div className="h-full col-span-3 shadow-lg w-full flex justify-center items-center bg-blue">
    
            <button
              onClick={goBack}
              className="flex absolute items-center p-2 text-white rounded-3xl top-8 left-6 hover:bg-orange-600 transition"
              aria-label="Go back"
            >
              <IoMdArrowRoundBack className="text-3xl text-white " />
            </button>
      <RegisterForm />
    </div>
  );
};

export default RegisterView;
