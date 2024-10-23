
import Hero from "./_components/Hero";
import Features from "@/components/Features";
import Demo from "./_components/Demo";
import Pricing from "./_components/Pricing";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <Features />
        <Demo />
        <Pricing />
      </main>
    </div>
  );
}