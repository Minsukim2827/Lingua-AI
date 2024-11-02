
'use client';

interface CollectionsProps {
  userData: {
    collections: number;
  };
}

export default function Collections({ userData }: CollectionsProps) {
  if (!userData) {
    return <div>Loading...</div>;
  }


  return (
    <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Collections</h2>
    </main>
  );
}