import { NextResponse } from 'next/server';
import pb from '@/lib/pocketbase';

export async function POST() {
  try {
    pb.authStore.clear();
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Logout failed' },
      { status: 500 }
    );
  }
}