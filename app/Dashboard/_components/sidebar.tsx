import { ChevronLeft, LayoutDashboard, FileText, Plus, FolderOpen, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface SidebarProps {
  isExpanded: boolean
  toggleSidebar: () => void
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function Sidebar({ isExpanded, toggleSidebar, activeTab, setActiveTab }: SidebarProps) {
  const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
    { icon: FileText, label: 'My Translations', id: 'translations' },
    { icon: Plus, label: 'New Translation', id: 'new' },
    { icon: FolderOpen, label: 'Collections', id: 'collections' },
  ]

  return (
    <aside
      className={`bg-white dark:bg-gray-800 shadow-md transition-all duration-300 ease-in-out ${
        isExpanded ? 'w-64' : 'w-20'
      } flex flex-col`}
    >
      <div className="flex justify-end pr-5 pt-2">
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          {isExpanded ? <ChevronLeft className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.id}>
              <Button
                variant={activeTab === item.id ? "secondary" : "ghost"}
                className={`w-full justify-start ${!isExpanded && 'justify-center'}`}
                onClick={() => setActiveTab(item.id)}
              >
                <item.icon className="h-5 w-5" />
                {isExpanded && <span className="ml-4">{item.label}</span>}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}