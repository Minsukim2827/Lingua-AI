
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: NextRequest) {
    try {
        const { username, clerkId } = await request.json();

        if (!username || !clerkId) {
            return NextResponse.json(
                { success: false, message: 'Missing username or clerkId.' },
                { status: 400 }
            );
        }

        // Insert the new user into the Supabase 'users' table
        const { data, error } = await supabase
            .from('users')
            .insert([{ username, clerk_id: clerkId }]);

        if (error) {
            if (error.code === '23505') { // Unique violation
                return NextResponse.json(
                    { success: false, message: 'User already exists.' },
                    { status: 409 }
                );
            }
            throw error;
        }

        return NextResponse.json({ success: true, data }, { status: 201 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error('Error in /api/auth/create-user:', error);
        return NextResponse.json(
            { success: false, message: 'Internal Server Error.' },
            { status: 500 }
        );
    }
}
