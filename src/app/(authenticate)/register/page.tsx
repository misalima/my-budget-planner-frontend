"use client"
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
    <div className="text-center">
     Register
    </div>
  );
};

export default RegisterView;
