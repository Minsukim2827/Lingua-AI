'use client';

import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
    
    // Listen for auth changes
    const handleAuthChange = () => checkAuth();
    window.addEventListener('auth-change', handleAuthChange);
    
    return () => window.removeEventListener('auth-change', handleAuthChange);
  }, [checkAuth]);

  return <>{children}</>;
}