import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Demo = () => {
  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">See LinguaAI in Action</h2>
        <div className="aspect-video max-w-4xl mx-auto bg-zinc-800 rounded-xl flex items-center justify-center">
          <p className="text-zinc-400">Demo Video Placeholder</p>
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <Link href="/signup">
              Try It Yourself <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Demo;
