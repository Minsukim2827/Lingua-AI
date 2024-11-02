'use client'

import { useState, useEffect } from 'react';
import Sidebar from './_components/sidebar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MainDashboard from './_components/main-dashboard';
import MyTranslations from './_components/Mytranslations';
import NewTranslation from './_components/NewTranslation';
import Collections from './_components/Collections';

interface UserData {
  name: string;
  totalTranslations: number;
  collections: number;
  recentTranslations: Translation[];
}

interface Translation {
  id: number;
  text: string;
  from: string;
  to: string;
  date: string;
}

export default function Dashboard() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userData, setUserData] = useState<UserData | null>(null);

  // Simulate API call to fetch user data
  useEffect(() => {
    // Simulate an API call with setTimeout
    setTimeout(() => {
      const mockUserData = {
        name: 'John Doe',
        totalTranslations: 1234,
        collections: 56,
        recentTranslations: [
          { id: 1, text: 'Hello world', from: 'English', to: 'Spanish', date: '2024-03-01' },
          { id: 2, text: 'Good morning', from: 'English', to: 'French', date: '2024-02-28' },
          { id: 3, text: 'Thank you', from: 'English', to: 'German', date: '2024-02-27' },
        ],
        // Add more mock data as needed
      };
      setUserData(mockUserData);
    }, 1000); // Simulate 1 second delay
  }, []);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <MainDashboard userData={userData} />;
      case 'translations':
        return <MyTranslations userData={userData} />;
      case 'new':
        return <NewTranslation userData={userData} />;
      case 'collections':
        return <Collections userData={userData} />;
      default:
        return <MainDashboard userData={userData} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          isExpanded={isSidebarExpanded}
          toggleSidebar={toggleSidebar}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="flex-1 overflow-y-auto">
          {userData ? renderContent() : <div>Loading...</div>}
        </div>
      </div>
      <Footer />
    </div>
  );
}