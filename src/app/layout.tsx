import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { WixClientContextProvider } from "@/Context/WixContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SHADE E-Commerce Application",
  description: "A complete e-commerce application with Next.js and Wix Built and Owned by Shadha deepak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WixClientContextProvider>

          <Navbar />
          {children}
          <Footer />
        </WixClientContextProvider>

      </body>
    </html>
  );
}
