"use client";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import NavBar from "@/components/common/NavBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
