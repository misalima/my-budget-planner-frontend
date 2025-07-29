"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Lightweight hook for pathname
import React from "react";

export default function NavBar() {
  const pathname = usePathname(); // Get the current path

  // Utility function to check if the current route matches the href
  const isActive = (path: string) => pathname === path;

  return (
    <header className="h-40 flex justify-between items-center px-32 py-6">
      <div>
        <Link href={"/"}>
          <Image
            width={240}
            height={300}
            alt="logo"
            src={"/images/logo-side.png"}
          />
        </Link>
      </div>
      <div className="flex items-center gap-12">
        <Link
          href="/"
          className={`rounded-md px-2 py-1 text-blue text-base font-semibold transition-all duration-75 hover:outline hover:outline-2 ${
            isActive("/") ? "border-b-8 border-orange" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`rounded-md px-2 py-1 text-blue text-base font-semibold transition-all duration-75 hover:outline hover:outline-2 ${
            isActive("/about") ? "border-b-8 border-orange" : ""
          }`}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`rounded-md px-2 py-1 text-blue text-base font-semibold transition-all duration-75 hover:outline hover:outline-2 ${
            isActive("/contact") ? "border-b-8 border-orange" : ""
          }`}
        >
          Contact
        </Link>
        <Link
          href="/login"
          className={"px-3 rounded-md outline outline-3 outline-offset-2 text-blue text-lg font-semibold transition-all hover:bg-blue hover:text-white hover:outline-blue"}
        >
          Login
        </Link>
      </div>
    </header>
  );
}
