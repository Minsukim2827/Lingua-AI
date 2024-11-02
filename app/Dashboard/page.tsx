'use client'

import { useState } from 'react'
import Sidebar from '@/components/sidebar'
import MainDashboard from '@/components/main-dashboard'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Dashboard() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true)
  const [activeTab, setActiveTab] = useState('dashboard')

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded)
  }


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
        <MainDashboard activeTab={activeTab} />
      </div>
      <Footer />
    </div>
  )
}