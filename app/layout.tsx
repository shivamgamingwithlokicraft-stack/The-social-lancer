import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Social Lancer | Digital Marketing Agency",
  description: "Click. Connect. Convert. Scale your business with proven marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {/* Wrapping PageTransition in Suspense fixes the build error */}
          <Suspense fallback={<div>{children}</div>}>
            <PageTransition>
              {children}
            </PageTransition>
          </Suspense>
        </main>
        <Footer />
      </body>
    </html>
  );
}