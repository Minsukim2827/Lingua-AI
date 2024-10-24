'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './modeToggle';
import { useAuth } from '@/hooks/useAuth';
import { Menu } from 'lucide-react';

export default function Header() {
  const { user, logout, isLoading } = useAuth();
  
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
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium hidden lg:inline-block">{user.email}</span>
              <Button 
                variant="outline"
                onClick={() => logout()}
                disabled={isLoading}
                className="hidden sm:inline-flex"
              >
                {isLoading ? 'Loading...' : 'Sign Out'}
              </Button>
            </div>
          ) : (
            <Link href="/signin">
              <Button variant="default" className="hidden sm:inline-flex">
                Sign In
              </Button>
            </Link>
          )}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}