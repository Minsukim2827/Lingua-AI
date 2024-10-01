import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Mapping of voice names to OpenAI voice IDs
const voiceNames = {
  "alloy": "alloy",
  "echo": "echo",
  "fable": "fable",
  "onyx": "onyx",
  "nova": "nova",
  "shimmer": "shimmer"
};

export async function POST(request: NextRequest) {
  const { text, voice } = await request.json();

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
