import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './modeToggle';
import { Menu } from 'lucide-react';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Header() {

  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          <span className="font-bold text-2xl text-primary">LinguaAI</span>
        </Link>
        
        <nav className="hidden md:flex space-x-4">
          <Link href="/#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Features</Link>
          <Link href="/#demo" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Demo</Link>
          <Link href="/#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ModeToggle />
<SignedIn>
<div className="dark:text-white text-black">
  <UserButton 
  showName 
  appearance={{
    elements: {
      userButtonOuterIdentifier: "dark:text-white text-black",
    }
  }}
  />
  </div>
              <Link href="/dashboard">
                <Button variant="default" className="hidden sm:inline-flex">
                  Dashboard
                </Button>
              </Link>
              </SignedIn>

<SignedOut>
            <Link href="/sign-in">
              <Button variant="default" className="hidden sm:inline-flex">
                Sign In
              </Button>
            </Link>
            </SignedOut>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}