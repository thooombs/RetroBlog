import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import NavbarTop from "./components/NavbarTop";
import AuthProvider from "./context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Thombs' Blog",
  description: "Blog of Thombs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-['Arial MT']`}>
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
