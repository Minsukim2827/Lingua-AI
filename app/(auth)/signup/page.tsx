'use client'

import { signup } from '../login/actions'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Link from 'next/link'

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Create an Account</CardTitle>
          <CardDescription className="text-center">Sign up for a new account</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" action={signup}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required placeholder="Create a password" />
            </div>
            <Button className="w-full" type="submit">Sign up</Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p>Already have an account? <Link href="/login" className="text-primary hover:underline">Log in</Link></p>
        </CardFooter>
      </Card>
    </div>
  )
}
