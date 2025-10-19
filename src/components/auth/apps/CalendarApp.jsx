import React from 'react';
import { Calendar } from 'lucide-react';

export default function CalendarApp() {
  const events = [
    { title: 'Reunião com Cliente', time: '10:00 - 11:00', color: 'from-blue-500 to-cyan-500' },
    { title: 'Almoço de Negócios', time: '12:00 - 13:00', color: 'from-green-500 to-emerald-500' },
    { title: 'Apresentação Projeto', time: '15:00 - 16:00', color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      {events.map((event, i) => (
        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-center gap-4 hover:bg-white/10 transition">
          <div className={`w-16 h-16 bg-gradient-to-br ${event.color} rounded-xl flex items-center justify-center text-white font-bold text-xl`}>
            {10 + i * 2}
          </div>
          <div className="flex-1">
            <h4 className="text-white font-bold text-lg">{event.title}</h4>
            <p className="text-white/50">{event.time}</p>
          </div>
          <Calendar className="text-white/50" size={24} />
        </div>
      ))}
    </div>
  );
}