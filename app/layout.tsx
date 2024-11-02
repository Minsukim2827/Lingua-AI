import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import {ClerkProvider} from '@clerk/nextjs'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Lingua AI",
  description: "nextjs14",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
    <html lang="en">

      <body className={`${inter.variable} font-sans antialiased`}>

      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            disableTransitionOnChange
          >

            

        {children}


        </ThemeProvider>

      </body>
      
    </html>
    </ClerkProvider>
  );
}
