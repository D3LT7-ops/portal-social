import React from 'react';

export default function PhotosApp() {
  const photos = Array(12).fill(null).map((_, i) => ({
    id: i,
    gradient: ['from-yellow-500 to-orange-500', 'from-purple-500 to-pink-500', 'from-blue-500 to-cyan-500', 'from-green-500 to-emerald-500'][i % 4]
  }));

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div 
            key={photo.id} 
            className={`aspect-square bg-gradient-to-br ${photo.gradient} rounded-xl hover:scale-105 transition cursor-pointer shadow-lg`}
          ></div>
        ))}
      </div>
    </div>
  );
}