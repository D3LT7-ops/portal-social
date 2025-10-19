import React, { useState } from 'react';
import { Search, Bell, X } from 'lucide-react';

export default function TopBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, text: 'Maria Silva curtiu seu post', time: '2 min', unread: true },
    { id: 2, text: 'João comentou na sua foto', time: '1h', unread: true },
    { id: 3, text: 'Novo evento: Reunião às 15h', time: '2h', unread: false },
  ];

  return (
    <div className="h-16 bg-black/40 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-6 relative z-10">
      {/* Search Bar */}
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Pesquisar apps, pessoas, conteúdo..."
            className="w-full bg-white/10 border border-white/10 rounded-xl pl-11 pr-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white/15 transition"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Notifications */}
      <div className="flex items-center gap-4 ml-4">
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative text-white/70 hover:text-white transition p-2 hover:bg-white/10 rounded-lg"
          >
            <Bell size={24} />
            {notifications.filter(n => n.unread).length > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center text-white font-bold animate-pulse">
                {notifications.filter(n => n.unread).length}
              </span>
            )}
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <>
              <div 
                className="fixed inset-0 z-10" 
                onClick={() => setShowNotifications(false)}
              />
              <div className="absolute right-0 top-full mt-2 w-80 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden z-20">
                <div className="p-4 border-b border-white/10">
                  <h3 className="text-white font-bold">Notificações</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map(notif => (
                    <div 
                      key={notif.id} 
                      className={`p-4 border-b border-white/5 hover:bg-white/5 cursor-pointer transition ${
                        notif.unread ? 'bg-purple-500/10' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {notif.unread && (
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                        )}
                        <div className="flex-1">
                          <p className="text-white text-sm">{notif.text}</p>
                          <p className="text-white/50 text-xs mt-1">{notif.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t border-white/10">
                  <button className="w-full text-center text-purple-400 hover:text-purple-300 text-sm font-medium">
                    Ver todas
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}