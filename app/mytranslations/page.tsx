"use client";

import React, { useState, useEffect } from 'react';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { useAuth } from '@/contexts/AuthContext';
import { createClient } from '@/utils/supabase/client';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';
import { useVoices } from '@/hooks/useVoices';
import { Listbox } from "@headlessui/react";
import { ChevronDown, Volume2 } from "lucide-react";

interface Translation {
    id: number;
    text: string;
    translatedtext: string;
    language: string;
  }

const MyTranslationsPage: React.FC = () => {
  const { user } = useAuth();
  const supabase = createClient();
  const [translations, setTranslations] = useState<Translation[]>([]);
  const { selectedVoice, setSelectedVoice, handleTextToSpeech } = useTextToSpeech();
  const voices = useVoices();

  useEffect(() => {
    const fetchTranslations = async () => {
      if (!user) return;
  
      const { data, error } = await supabase
        .from('translations')
        .select('*')
        .eq('user_uuid', user.id)
        .order('id', { ascending: false });
  
      if (error) {
        console.error('Error fetching translations:', error);
      } else {
        setTranslations(data || []);
      }
    };
  
    fetchTranslations();
  }, [user]);
  

  return (
    <ProtectedRoute>
      <div className="container mx-auto p-4 max-w-4xl">
        <h1 className="text-2xl font-bold mb-4">My Translations</h1>
        <div className="flex justify-end items-center gap-2 mb-4 text-black">
          <Listbox value={selectedVoice} onChange={setSelectedVoice}>
            <div className="relative">
              <Listbox.Button className="relative w-32 cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md">
                <span className="block truncate">{selectedVoice}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-32 overflow-auto rounded-md bg-white py-1 text-base shadow-lg">
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
        </div>
        <div className="grid gap-4">
        {translations.length > 0 ? (
    translations.map((translation) => (
            <div key={translation.id} className="border rounded-md p-4">
              <p><strong>Original Text:</strong> {translation.text}</p>
              <p><strong>Translated Text:</strong> {translation.translatedtext}</p>
              <p><strong>Language:</strong> {translation.language}</p>
              <button
                onClick={() => handleTextToSpeech(translation.translatedtext)}
                className="mt-2 p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                <Volume2 className="h-5 w-5 inline-block mr-2" />
                Play Translation
              </button>
            </div>
    ))
) : (
  <p>No translations found.</p>
)}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default MyTranslationsPage;
