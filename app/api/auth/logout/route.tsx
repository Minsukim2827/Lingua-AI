import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  const cookieStore = cookies();

  // Delete the authentication cookie
  cookieStore.delete('pb_auth');

  // Redirect to the homepage after logging out
  return NextResponse.redirect(new URL('/', process.env.NEXT_PUBLIC_BASE_URL));
}