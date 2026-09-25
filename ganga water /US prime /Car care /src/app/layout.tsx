import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomCTA } from "@/components/layout/MobileBottomCTA";
import { GoogleAnalytics } from "@/components/seo/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "City Way Cabs",
  description: "Reliable Cab Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <GoogleAnalytics />
        <TopBar />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileBottomCTA />
      </body>
    </html>
  );
}
