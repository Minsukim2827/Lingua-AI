import { useState } from 'react';

export function useTextToSpeech() {
  const [selectedVoice, setSelectedVoice] = useState('alloy');

  const handleTextToSpeech = async (text: string) => {
    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text,
          voice: selectedVoice
        })
      });

      if (response.ok) {
        const blob = await response.blob();
        const audioUrl = URL.createObjectURL(blob);
        const audio = new Audio(audioUrl);
        audio.play();
      } else {
        const errorData = await response.json();
        console.error('Text-to-speech failed:', errorData.error);
      }
    } catch (error) {
      console.error('An error occurred during text-to-speech:', error);
    }
  };

  return { selectedVoice, setSelectedVoice, handleTextToSpeech };
}
