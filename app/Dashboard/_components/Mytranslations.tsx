'use client';

interface MyTranslationsProps {
  userData: {
    recentTranslations: Array<{
      id: number;
      text: string;
      from: string;
      to: string;
      date: string;
    }>;
  };
}

export default function MyTranslations({ userData }: MyTranslationsProps) {
  if (!userData) {
    return <div>Loading...</div>;
  }

  const { recentTranslations } = userData;

  return (
    <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">My Translations</h2>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {recentTranslations.map((translation) => (
          <li key={translation.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{translation.text}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {translation.from} to {translation.to}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}