import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">LinguaAI Points</CardTitle>
              <CardDescription>Pay only for what you use</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                  Get 200 free LinguaAI points when you sign up
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                  Purchase additional points as needed
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                  Points never expire
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                  Secure payments via Stripe
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/signup">Start with 200 Free Points</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
