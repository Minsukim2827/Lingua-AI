
'use client';

import { FileText, FolderOpen, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface MainDashboardProps {
  userData: {
    totalTranslations: number;
    collections: number;
    recentTranslations: Array<{
      id: number;
      text: string;
      from: string;
      to: string;
      date: string;
    }>;
  };
}

export default function MainDashboard({ userData }: MainDashboardProps) {
  if (!userData) {
    return <div>Loading...</div>;
  }

  const stats = [
    { icon: FileText, label: 'Total Translations', value: userData.totalTranslations },
    { icon: FolderOpen, label: 'Collections', value: userData.collections },
  ];

  const { recentTranslations } = userData;

  return (
    <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Recent Translations</h3>
      <Card>
        <CardContent className="p-0">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {recentTranslations.map((translation) => (
              <li key={translation.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{translation.text}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {translation.from} to {translation.to}
                    </p>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="h-4 w-4 mr-1" />
                    {translation.date}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </main>
  );
}
