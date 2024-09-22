import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import NavBar from "@/components/NavBar";
import Image from "next/image";

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
        <header className="h-40 flex justify-between items-center px-32 py-6">
          <Image
            width={240}
            height={300}
            alt="logo"
            src={"/images/logo-side.png"}
          />
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  );
}
