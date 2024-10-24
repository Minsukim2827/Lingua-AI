import { NextResponse } from 'next/server';
import pb from '@/lib/pocketbase';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    
    const authData = await pb
      .collection('users')
      .authWithPassword(email, password);
    console.log(authData);
    
    return NextResponse.json({ user: authData.record });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Authentication failed' },
      { status: 401 }
    );
  }
}