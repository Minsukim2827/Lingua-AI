'use client';

import { useForm } from "react-hook-form";
import { useAuth } from '@/hooks/useAuth';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ClientResponseError } from 'pocketbase';

interface LoginForm {
    email: string;
    password: string;
}

export default function LoginPage() {
    const { login, isLoading } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
    const router = useRouter();
    const [error, setError] = useState<string>('');

    async function onSubmit(data: LoginForm) {
        try {
            setError('');
            await login(data.email, data.password);
            router.push('/Dashboard');
        } catch (error) {
            if (error instanceof ClientResponseError) {
                setError(error.message || 'Invalid email or password');
            } else {
                setError('An unexpected error occurred');
            }
            console.error('Login Error:', error);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Login to LinguaAI</CardTitle>
                    <CardDescription>
                        Enter your details to access your account
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <CardContent className="grid gap-4">
                        {error && (
                            <div className="text-red-500 text-sm">{error}</div>
                        )}
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                            />
                            {errors.email && (
                                <span className="text-red-500 text-sm">{errors.email.message}</span>
                            )}
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 8,
                                        message: 'Password must be at least 8 characters'
                                    }
                                })}
                            />
                            {errors.password && (
                                <span className="text-red-500 text-sm">{errors.password.message}</span>
                            )}
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <Button
                            className="w-full"
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? "Loading..." : "Login"}
                        </Button>
                        <p className="text-sm text-gray-500">
                            Don&apos;t have an account?{' '}
                            <Link href="/signup" className="text-blue-500 hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}