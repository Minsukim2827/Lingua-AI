'use client';

interface Translation {
  id: number;
  input: string;
  output: string;
  language: string;
  tone: string;
  date: string;
}

interface MyTranslationsProps {
  translations: Translation[];
}

export default function MyTranslations({ translations }: MyTranslationsProps) {
  if (!translations || translations.length === 0) {
    return <div>No translations found.</div>;
  }

  return (
    <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">My Translations</h2>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {translations.map((translation) => (
          <li key={translation.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{translation.input}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {translation.language} - {translation.tone}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Created on: {new Date(translation.date).toLocaleDateString()}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}