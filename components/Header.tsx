"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./modeToggle";

export default function Header() {

  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          LinguaAI
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="features" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Features
          </Link>
          <Link href="#demo" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Demo
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
        <ModeToggle />
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium"></span>
              <Button variant="ghost">
                Sign Out
              </Button>
            </div>

            <Button asChild>
              <Link href="/signin">Sign In</Link>
            </Button>

        </div>
      </div>
    </header>
  );
}
