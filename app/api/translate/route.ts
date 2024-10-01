import { NextRequest, NextResponse } from 'next/server';

// Mapping of language names to codes
const languageCodes = {
  "English": "English",
  "Mandarin": "Mandarin Chinese",
  "Hindi": "Hindi",
  "Spanish": "Spanish",
  "French": "French",
  "Arabic": "Arabic",
  "Bengali": "Bengali",
  "Russian": "Russian",
  "Portuguese": "Portuguese",
  "Indonesian": "Indonesian",
  "Urdu": "Urdu",
  "German": "German",
  "Japanese": "Japanese",
  "Swahili": "Swahili",
  "Marathi": "Marathi",
  "Telugu": "Telugu",
  "Turkish": "Turkish",
  "Tamil": "Tamil",
  "Yue Chinese": "Cantonese",
  "Vietnamese": "Vietnamese"
};

export async function POST(request: NextRequest) {
  const { inputText, language } = await request.json();

  const targetLanguage = languageCodes[language] || language;

  // Build the prompt for the language model
  const prompt = `${inputText}\nPlease only translate the text into ${targetLanguage}, do not include any other fluff.`;

  // Call your translation model here, e.g., OpenAI API
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'OpenAI API key not set' }, { status: 500 });
  }

  const completionResponse = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini', // Use 'gpt-4' if you have access
      messages: [
        { role: 'user', content: prompt }
      ]
    })
  });

  if (completionResponse.ok) {
    const completionData = await completionResponse.json();
    const translatedText = completionData.choices[0].message.content.trim();

    return NextResponse.json({ translatedText });
  } else {
    const errorData = await completionResponse.json();
    return NextResponse.json({ error: errorData }, { status: completionResponse.status });
  }
}
