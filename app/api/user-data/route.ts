import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(request: Request) {
  try {
    const { clerkId } = await request.json();

    // Fetch the user from the database
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('clerk_id', clerkId)
      .single();

    if (userError || !userData) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const userId = userData.id;

    // Get total translations count
    const { count: totalTranslations, error: translationsCountError } = await supabase
      .from('translations')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId);

    if (translationsCountError) {
      return NextResponse.json({ error: 'Error fetching translations count' }, { status: 500 });
    }

    // Get total collections count
    const { count: collectionsCount, error: collectionsCountError } = await supabase
      .from('collections')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId);

    if (collectionsCountError) {
      return NextResponse.json({ error: 'Error fetching collections count' }, { status: 500 });
    }

    // Get all translations
    const { data: allTranslationsData, error: allTranslationsError } = await supabase
      .from('translations')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (allTranslationsError) {
      return NextResponse.json({ error: 'Error fetching translations' }, { status: 500 });
    }

    // Map translations to the expected format
    const allTranslations = allTranslationsData.map((translation) => ({
      id: translation.id,
      input: translation.input,
      output: translation.output,
      language: translation.language,
      tone: translation.tone,
      date: translation.created_at,
    }));

    // Get recent translations (limit to 3)
    const recentTranslations = allTranslations.slice(0, 3);

    // Get all collections
    const { data: collectionsData, error: collectionsError } = await supabase
      .from('collections')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (collectionsError) {
      return NextResponse.json({ error: 'Error fetching collections' }, { status: 500 });
    }

    // Map collections to the expected format
    const collections = collectionsData.map((collection) => ({
      id: collection.id,
      name: collection.name,
      date: collection.created_at,
    }));

    // Prepare the response data
    const responseData = {
      name: userData.username,
      totalTranslations: totalTranslations || 0,
      collectionsCount: collectionsCount || 0,
      recentTranslations,
      allTranslations,
      collections,
    };

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Error in user-data API route:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
