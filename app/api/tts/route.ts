import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { voiceNames } from '@/utils/voiceName';
import { VoiceName } from '@/types/voicetypes';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});


export async function POST(request: NextRequest) {
  const { text, voice } = await request.json() as { text: string; voice: VoiceName };

  const voiceName = voiceNames[voice] || 'alloy';

  try {
    // Call OpenAI's TTS API
    const response = await openai.audio.speech.create({
      model: 'tts-1',
      voice: voiceName,
      input: text
    });

    // Convert the response to a buffer
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Return the audio data as a binary stream
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Length': buffer.length.toString(),
      },
    });

  } catch (error) {
    console.error('TTS error:', error);
    return NextResponse.json({ error: 'Text-to-speech failed' }, { status: 500 });
  }
}
