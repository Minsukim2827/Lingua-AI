"use client"

import { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import ky from 'ky';

const InitialisingPage: React.FC = () => {
    const { user, isLoaded } = useUser();
    const router = useRouter();

    useEffect(() => {
        const initializeUser = async () => {
            if (!isLoaded) return;
            if (user) {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const response = await ky.post('/api/auth/create-user', {
                    json: { clerkId: user.id, username: user.username },
                }).json();  
                router.push('/dashboard');
                } else {
                    console.error('No user found.');
                }
            
            } 
            initializeUser();
    }, [isLoaded, user, router]);

    return (
        <div>
            <h1>Initialising...</h1>
        </div>
    );
};

export default InitialisingPage;