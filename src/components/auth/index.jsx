import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider, useAuth } from './components/auth/AuthContext';
import LoginPage from './components/auth/LoginPage';
import App from './App';
import './index.css';

function Root() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return user ? <App /> : <LoginPage />;
}

function AppWrapper() {
  return (
    <AuthProvider>
      <Root />
    </AuthProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

