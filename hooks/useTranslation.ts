import { useState } from 'react';
import { languageCodes } from '@/utils/languageCodes';

export function useTranslation() {
    const [outputText, setOutputText] = useState("");
  
    const handleTranslate = async (inputText: string, selectedLanguage: string) => {
      const languageCode = languageCodes[selectedLanguage] || selectedLanguage;
  
      try {
        const response = await fetch('/api/translate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            inputText,
            language: languageCode
          })
        });
  
        if (response.ok) {
          const data = await response.json();
          setOutputText(data.translatedText);
        } else {
          const errorData = await response.json();
          console.error('Translation failed:', errorData.error);
        }
      } catch (error) {
        console.error('An error occurred during translation:', error);
      }
    };
  
    return { outputText, handleTranslate };
  }