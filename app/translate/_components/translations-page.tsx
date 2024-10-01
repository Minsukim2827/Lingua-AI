"use client";

import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronDown, Save, Volume2 } from "lucide-react";

const languages = [
  "English", "Mandarin", "Hindi", "Spanish", "French",
  "Arabic", "Bengali", "Russian", "Portuguese", "Indonesian",
  "Urdu", "German", "Japanese", "Swahili", "Marathi",
  "Telugu", "Turkish", "Tamil", "Yue Chinese", "Vietnamese"
];

const voices = ["alloy", "echo", "fable", "onyx", "nova", "shimmer"];

// Mapping of language names to codes (if needed)
const languageCodes = {
  "English": "en",
  "Mandarin": "zh",
  "Hindi": "hi",
  "Spanish": "es",
  "French": "fr",
  "Arabic": "ar",
  "Bengali": "bn",
  "Russian": "ru",
  "Portuguese": "pt",
  "Indonesian": "id",
  "Urdu": "ur",
  "German": "de",
  "Japanese": "ja",
  "Swahili": "sw",
  "Marathi": "mr",
  "Telugu": "te",
  "Turkish": "tr",
  "Tamil": "ta",
  "Yue Chinese": "yue",
  "Vietnamese": "vi"
};

export function TranslationsPageComponent() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [selectedVoice, setSelectedVoice] = useState(voices[0]);

  const handleTranslate = async () => {
    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          inputText,
          language: selectedLanguage
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

  const handleTextToSpeech = async () => {
    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: outputText,
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

  const handleSave = () => {
    // Implement save functionality here
    console.log("Saving translation:", outputText);
  };
  

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-4">Translation Page</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="input-text" className="block text-sm font-medium text-gray-700 mb-2">
            Input Text
          </label>
          <textarea
            id="input-text"
            className="w-full h-40 p-2 border border-gray-300 rounded-md"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text to translate"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 text-black">
          <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-48 cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{selectedLanguage}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-48 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {languages.map((language, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-4 ${
                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                      }`
                    }
                    value={language}
                  >
                    {({ selected }) => (
                      <>
                        <span className={`block ${selected ? 'font-medium' : 'font-normal'}`}>
                          {language}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
          <button
            onClick={handleTranslate}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Translate
          </button>
        </div>
        <div className="flex-1">
          <label htmlFor="output-text" className="block text-sm font-medium text-gray-700 mb-2">
            Translated Text
          </label>
          <textarea
            id="output-text"
            className="w-full h-40 p-2 border border-gray-300 rounded-md"
            value={outputText}
            readOnly
            placeholder="Translation will appear here"
          />
          <div className="mt-2 flex justify-end items-center gap-2 text-black">
            <Listbox value={selectedVoice} onChange={setSelectedVoice}>
              <div className="relative">
                <Listbox.Button className="relative w-32 cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{selectedVoice}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-32 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {voices.map((voice, index) => (
                    <Listbox.Option
                      key={index}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-3 pr-4 ${
                          active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                        }`
                      }
                      value={voice}
                    >
                      {({ selected }) => (
                        <>
                          <span className={`block ${selected ? 'font-medium' : 'font-normal'}`}>
                            {voice}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
            <button
              onClick={handleTextToSpeech}
              className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              aria-label="Play translation"
            >
              <Volume2 className="h-5 w-5" />
            </button>
            <button
              onClick={handleSave}
              className="p-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              aria-label="Save translation"
            >
              <Save className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}