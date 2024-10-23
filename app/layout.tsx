import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider"


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
    <html lang="en" suppressHydrationWarning>

      <body className={`${inter.variable} font-sans antialiased`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            disableTransitionOnChange
          >
            
      <Header />
        {children}
        <Footer />
        
        </ThemeProvider>
      </body>
      
    </html>

  );
}
