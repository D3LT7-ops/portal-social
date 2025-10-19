import React, { useState } from 'react';
import { apps } from './config/apps';
import Sidebar from './components/layout/Sidebar';
import TopBar from './components/layout/TopBar';
import UserProfile from './components/layout/UserProfile';

export default function App() {
  const [activeApp, setActiveApp] = useState('feed');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const ActiveComponent = apps.find(a => a.id === activeApp)?.component;

  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex overflow-hidden">
      {/* Sidebar with User Profile */}
      <Sidebar 
        activeApp={activeApp}
        setActiveApp={setActiveApp}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      >
        <UserProfile sidebarOpen={sidebarOpen} />
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        
        {/* App Content */}
        <div className="flex-1 overflow-auto">
          {ActiveComponent && <ActiveComponent />}
        </div>
      </div>
    </div>
  );
}