import React, { useState } from 'react';

export default function MusicApp() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 text-center">
        <div className="w-64 h-64 mx-auto bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl mb-8 shadow-2xl"></div>
        <h3 className="text-white text-3xl font-bold">Nome da Música</h3>
        <p className="text-white/70 text-xl mt-2">Artista</p>
        
        <div className="mt-8 bg-white/10 rounded-full h-2 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full w-1/3"></div>
        </div>
        
        <div className="flex justify-center gap-6 mt-8">
          <button className="w-16 h-16 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition">
            <span className="text-white text-2xl">⏮</span>
          </button>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center transition hover:scale-110 shadow-lg"
          >
            <span className="text-white text-3xl">{isPlaying ? '⏸' : '▶'}</span>
          </button>
          <button className="w-16 h-16 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition">
            <span className="text-white text-2xl">⏭</span>
          </button>
        </div>
      </div>
    </div>
  );
}