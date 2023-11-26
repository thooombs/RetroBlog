import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import NavbarTop from "./components/NavbarTop";
import AuthProvider from "./context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ku's Blog",
  description: "Blog of Ku",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <NavbarTop />
        <div className=" flex flex-col">
          <div className="flex">
            <Navbar />
            
            <div className="flex-grow container p-4">
            
              {children}
            </div>
            
          </div>
        </div>
        </AuthProvider>
      </body>
    </html>
  );
}
