import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-primary/5">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Translate Anything, Anywhere
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground">
          LinguaAI breaks down language barriers with advanced AI-powered translation for text and voice.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/signup">Get Started</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#demo">See Demo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
