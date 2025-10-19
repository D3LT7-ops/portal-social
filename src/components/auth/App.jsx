import React, { useState } from 'react';
import { Menu, Search, Bell, Settings, LogOut } from 'lucide-react';
import { useAuth } from './components/auth/AuthContext';
import { apps } from './config/apps';

export default function App() {
  const { user, logout } = useAuth();
  const [activeApp, setActiveApp] = useState('feed');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showProfile, setShowProfile] = useState(false);

  const ActiveComponent = apps.find(a => a.id === activeApp)?.component;

  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex overflow-hidden">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-72' : 'w-20'} bg-black/40 backdrop-blur-xl border-r border-white/10 transition-all duration-300 flex flex-col`}>
        {/* Logo/Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          {sidebarOpen && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-white">Social Portal</h1>
            </div>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white/70 hover:text-white transition">
            <Menu size={24} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {apps.map(app => (
            <button
              key={app.id}
              onClick={() => setActiveApp(app.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                activeApp === app.id
                  ? 'bg-white/20 text-white shadow-lg shadow-purple-500/50'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <app.icon size={24} />
              {sidebarOpen && <span className="font-medium">{app.name}</span>}
            </button>
          ))}
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-white/10">
          <div 
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition cursor-pointer relative"
          >
            <img src={user?.avatar} alt={user?.name} className="w-10 h-10 rounded-full" />
            {sidebarOpen && (
              <div className="flex-1">
                <p className="text-white font-medium text-sm">{user?.name}</p>
                <p className="text-white/50 text-xs truncate">{user?.email}</p>
              </div>
            )}
          </div>
          
          {showProfile && sidebarOpen && (
            <div className="mt-2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-2 space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2 text-white/70 hover:bg-white/10 rounded-lg transition text-left">
                <Settings size={18} />
                <span className="text-sm">Configurações</span>
              </button>
              <button 
                onClick={logout}
                className="w-full flex items-center gap-3 px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition text-left"
              >
                <LogOut size={18} />
                <span className="text-sm">Sair</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="h-16 bg-black/40 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-6">
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" size={20} />
              <input
                type="text"
                placeholder="Pesquisar..."
                className="w-full bg-white/10 border border-white/10 rounded-xl pl-11 pr-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative text-white/70 hover:text-white transition">
              <Bell size={24} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center text-white font-bold">3</span>
            </button>
          </div>
        </div>

        {/* App Content */}
        <div className="flex-1 overflow-auto">
          {ActiveComponent && <ActiveComponent user={user} />}
        </div>
      </div>
    </div>
  );
}