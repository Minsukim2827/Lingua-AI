'use client'

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import ky from 'ky'; 

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
  collectionsCount: number;
  recentTranslations: Translation[];
  allTranslations: Translation[];
  collections: Collection[];
}

interface Translation {
  id: number;
  input: string;
  output: string;
  language: string;
  tone: string;
  date: string;
}

interface Collection {
  id: number;
  name: string;
  date: string;
}


export default function Dashboard() {
  const { user } = useUser();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    if (user) {
      // Fetch user data from the backend
      const fetchData = async () => {
        try {
          const response: UserData = await ky
            .post('/api/user-data', {
              json: {
                clerkId: user.id,
              },
            })
            .json();

          setUserData(response);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchData();
    }
  }, [user]);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <MainDashboard userData={userData} />;
      case 'translations':
        return <MyTranslations translations={userData?.allTranslations || []} />;
      case 'new':
        return <NewTranslation />;
      case 'collections':
        return <Collections collections={userData?.collections || []} />;
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