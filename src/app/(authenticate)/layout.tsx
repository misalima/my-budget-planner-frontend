import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import NavBar from "@/components/common/NavBar";
import Image from "next/image";
import HeroImageRight from "@/components/common/HeroImageRight";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "My Budget Planner",
  description: "Your helpful expense tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="grid md:grid-cols-8 w-screen h-screen">
          {children}
          <div className="hidden md:flex md:col-span-5 md:justify-center md:items-center">
            <HeroImageRight />
          </div>
        </div>
      </body>
    </html>
  );
}
