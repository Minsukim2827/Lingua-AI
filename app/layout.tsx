import React from 'react';
import { NavbarComponent } from "@/components/navbar";
import "./globals.css";
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavbarComponent />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
