import React from 'react';

export default function NewsApp() {
  const news = [
    { title: 'Nova Tecnologia Revoluciona Mercado', category: 'Tecnologia', time: '2h atrás' },
    { title: 'Economia em Alta no Terceiro Trimestre', category: 'Economia', time: '5h atrás' },
    { title: 'Descoberta Científica Surpreende Mundo', category: 'Ciência', time: '1d atrás' },
    { title: 'Esportes: Time Local Vence Campeonato', category: 'Esportes', time: '2d atrás' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      {news.map((item, i) => (
        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition cursor-pointer">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <span className="text-purple-400 text-sm font-medium">{item.category}</span>
              <h3 className="text-white font-bold text-xl mt-2">{item.title}</h3>
              <p className="text-white/50 text-sm mt-2">{item.time}</p>
            </div>
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg ml-4"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
