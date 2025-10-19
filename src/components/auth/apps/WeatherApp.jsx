import React from 'react';
import { Cloud } from 'lucide-react';

export default function WeatherApp() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 text-center">
        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-6">
          <Cloud size={64} className="text-white" />
        </div>
        <h3 className="text-white text-6xl font-bold">28°C</h3>
        <p className="text-white/70 text-xl mt-2">Parcialmente Nublado</p>
        <div className="grid grid-cols-3 gap-4 mt-12">
          {['Segunda', 'Terça', 'Quarta'].map((day, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-white/70">{day}</p>
              <p className="text-white text-2xl font-bold mt-2">{26 + i}°</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}