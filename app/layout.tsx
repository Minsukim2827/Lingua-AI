import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Lingua AI",
  description: "nextjs14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${inter.variable} font-sans antialiased`}>
      <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
