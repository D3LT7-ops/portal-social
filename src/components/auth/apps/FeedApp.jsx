import React, { useState } from 'react';
import { Heart, MessageSquare, Share2, Bookmark, MoreHorizontal, Image, Smile } from 'lucide-react';

export default function FeedApp({ user }) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: { name: 'Maria Silva', avatar: 'https://ui-avatars.com/api/?name=Maria+Silva&background=8b5cf6&color=fff' },
      content: 'Que dia incrível! Acabei de lançar meu novo projeto 🚀',
      likes: 42,
      comments: 8,
      shares: 3,
      time: '2h atrás',
      liked: false
    },
    {
      id: 2,
      author: { name: 'João Santos', avatar: 'https://ui-avatars.com/api/?name=Joao+Santos&background=3b82f6&color=fff' },
      content: 'Aprendendo React todos os dias! 💻',
      likes: 128,
      comments: 15,
      shares: 7,
      time: '5h atrás',
      liked: true
    },
  ]);

  const [newPost, setNewPost] = useState('');

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const handlePost = () => {
    if (!newPost.trim()) return;
    
    const post = {
      id: Date.now(),
      author: { name: user.name, avatar: user.avatar },
      content: newPost,
      likes: 0,
      comments: 0,
      shares: 0,
      time: 'Agora',
      liked: false
    };
    
    setPosts([post, ...posts]);
    setNewPost('');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      {/* Create Post */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
        <div className="flex gap-4">
          <img src={user?.avatar} alt={user?.name} className="w-12 h-12 rounded-full" />
          <div className="flex-1">
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="No que você está pensando?"
              className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              rows="3"
            />
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-2">
                <button className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition">
                  <Image size={20} />
                </button>
                <button className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition">
                  <Smile size={20} />
                </button>
              </div>
              <button 
                onClick={handlePost}
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-lg text-white font-medium hover:opacity-90 transition"
              >
                Publicar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Posts Feed */}
      {posts.map(post => (
        <div key={post.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full" />
              <div>
                <h4 className="text-white font-bold">{post.author.name}</h4>
                <p className="text-white/50 text-sm">{post.time}</p>
              </div>
            </div>
            <button className="text-white/70 hover:text-white transition">
              <MoreHorizontal size={20} />
            </button>
          </div>

          <p className="text-white mb-4">{post.content}</p>

          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <button 
              onClick={() => handleLike(post.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                post.liked ? 'text-red-500' : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Heart size={20} fill={post.liked ? 'currentColor' : 'none'} />
              <span className="font-medium">{post.likes}</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition">
              <MessageSquare size={20} />
              <span className="font-medium">{post.comments}</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition">
              <Share2 size={20} />
              <span className="font-medium">{post.shares}</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition">
              <Bookmark size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}