'use client';

interface Collection {
  id: number;
  name: string;
  date: string;
}

interface CollectionsProps {
  collections: Collection[];
}

export default function Collections({ collections }: CollectionsProps) {
  if (!collections || collections.length === 0) {
    return <div>No collections found.</div>;
  }

  return (
    <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Collections</h2>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {collections.map((collection) => (
          <li key={collection.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{collection.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Created on: {new Date(collection.date).toLocaleDateString()}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
