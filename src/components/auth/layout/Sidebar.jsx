import React from 'react';
import { Menu } from 'lucide-react';
import { apps } from '../../config/apps';

export default function Sidebar({ activeApp, setActiveApp, sidebarOpen, setSidebarOpen, children }) {
  return (
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
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)} 
          className="text-white/70 hover:text-white transition p-2 hover:bg-white/10 rounded-lg"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {apps.map(app => {
          const Icon = app.icon;
          return (
            <button
              key={app.id}
              onClick={() => setActiveApp(app.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                activeApp === app.id
                  ? 'bg-white/20 text-white shadow-lg shadow-purple-500/50 scale-105'
                  : 'text-white/70 hover:bg-white/10 hover:text-white hover:scale-102'
              }`}
              title={app.name}
            >
              <Icon size={24} />
              {sidebarOpen && <span className="font-medium">{app.name}</span>}
              {activeApp === app.id && !sidebarOpen && (
                <span className="absolute left-full ml-2 px-2 py-1 bg-black/80 text-white text-sm rounded-lg whitespace-nowrap">
                  {app.name}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* User Profile Section */}
      {children}
    </div>
  );
}