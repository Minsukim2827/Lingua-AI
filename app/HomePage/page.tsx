import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "./_components/Hero";
import Features from "@/components/Features";
import Demo from "./_components/Demo";
import Pricing from "./_components/Pricing";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Hero />
        <Features />
        <Demo />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}