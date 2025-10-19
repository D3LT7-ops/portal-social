import React, { useState } from 'react';
import { Settings, LogOut, User, HelpCircle, Moon, Sun } from 'lucide-react';
import { useAuth } from '../auth/AuthContext';

export default function UserProfile({ sidebarOpen }) {
  const { user, logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const menuItems = [
    { icon: User, label: 'Meu Perfil', action: () => console.log('Perfil') },
    { icon: Settings, label: 'Configurações', action: () => console.log('Configurações') },
    { icon: darkMode ? Sun : Moon, label: darkMode ? 'Modo Claro' : 'Modo Escuro', action: () => setDarkMode(!darkMode) },
    { icon: HelpCircle, label: 'Ajuda', action: () => console.log('Ajuda') },
    { icon: LogOut, label: 'Sair', action: logout, danger: true },
  ];

  return (
    <div className="p-4 border-t border-white/10">
      <div className="relative">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition cursor-pointer"
        >
          <div className="relative">
            <img 
              src={user?.avatar} 
              alt={user?.name} 
              className="w-10 h-10 rounded-full ring-2 ring-purple-500/50"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-black rounded-full"></span>
          </div>
          {sidebarOpen && (
            <div className="flex-1 text-left">
              <p className="text-white font-medium text-sm">{user?.name}</p>
              <p className="text-white/50 text-xs truncate">{user?.email}</p>
            </div>
          )}
        </button>

        {/* User Menu Dropdown */}
        {showMenu && (
          <>
            <div 
              className="fixed inset-0 z-10" 
              onClick={() => setShowMenu(false)}
            />
            <div className={`absolute ${sidebarOpen ? 'bottom-full mb-2 left-0 right-0' : 'left-full bottom-0 ml-2'} bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden z-20 min-w-[200px]`}>
              {/* User Info Header */}
              {sidebarOpen && (
                <div className="p-4 border-b border-white/10 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                  <div className="flex items-center gap-3">
                    <img 
                      src={user?.avatar} 
                      alt={user?.name} 
                      className="w-12 h-12 rounded-full ring-2 ring-white/20"
                    />
                    <div>
                      <p className="text-white font-bold">{user?.name}</p>
                      <p className="text-white/70 text-xs">{user?.email}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Menu Items */}
              <div className="p-2">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        item.action();
                        setShowMenu(false);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition text-left ${
                        item.danger 
                          ? 'text-red-400 hover:bg-red-500/10' 
                          : 'text-white/70 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <Icon size={18} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="p-3 border-t border-white/10 bg-white/5">
                <p className="text-white/50 text-xs text-center">
                  Social Portal v1.0.0
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Quick Stats (only when sidebar is open) */}
      {sidebarOpen && (
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="bg-white/5 rounded-lg p-2 text-center">
            <p className="text-white font-bold text-sm">234</p>
            <p className="text-white/50 text-xs">Posts</p>
          </div>
          <div className="bg-white/5 rounded-lg p-2 text-center">
            <p className="text-white font-bold text-sm">1.2K</p>
            <p className="text-white/50 text-xs">Amigos</p>
          </div>
          <div className="bg-white/5 rounded-lg p-2 text-center">
            <p className="text-white font-bold text-sm">89</p>
            <p className="text-white/50 text-xs">Fotos</p>
          </div>
        </div>
      )}
    </div>
  );
}