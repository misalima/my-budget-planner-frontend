"use client";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/common/AppSideBar";

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
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1 flex flex-col overflow-hidden">
            <div className="flex items-center p-4 border-b bg-white">
              <SidebarTrigger />
            </div>
            <div className="flex-1 overflow-auto">{children}</div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
