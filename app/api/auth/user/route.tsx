import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  const cookie = cookies().get('pb_auth');
  
  if (!cookie) {
    return NextResponse.json({ user: null });
  }
  
  const { model } = JSON.parse(cookie.value);
  return NextResponse.json({ user: model });
}