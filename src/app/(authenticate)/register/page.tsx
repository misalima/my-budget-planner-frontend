"use client"
import RegisterForm from "@/components/RegisterForm";
import React, { useState } from "react";

const RegisterView: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Registering:", { username, password });
  };

  return (
    <div className="h-full col-span-3 shadow-lg w-full flex justify-center items-center bg-blue">
      
      <RegisterForm />
    </div>
  );
};

export default RegisterView;
