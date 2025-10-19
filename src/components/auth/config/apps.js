import { Home, Newspaper, Cloud, Calculator, Calendar, Mail, Music, Camera } from 'lucide-react';
import FeedApp from '../components/apps/FeedApp';
import NewsApp from '../components/apps/NewsApp';
import WeatherApp from '../components/apps/WeatherApp';
import CalculatorApp from '../components/apps/CalculatorApp';
import CalendarApp from '../components/apps/CalendarApp';
import EmailApp from '../components/apps/EmailApp';
import MusicApp from '../components/apps/MusicApp';
import PhotosApp from '../components/apps/PhotosApp';

export const apps = [
  { 
    id: 'feed', 
    name: 'Feed', 
    icon: Home, 
    color: 'from-blue-500 to-cyan-500', 
    component: FeedApp 
  },
  { 
    id: 'news', 
    name: 'Notícias', 
    icon: Newspaper, 
    color: 'from-blue-500 to-cyan-500', 
    component: NewsApp 
  },
  { 
    id: 'weather', 
    name: 'Clima', 
    icon: Cloud, 
    color: 'from-purple-500 to-pink-500', 
    component: WeatherApp 
  },
  { 
    id: 'calc', 
    name: 'Calculadora', 
    icon: Calculator, 
    color: 'from-orange-500 to-red-500', 
    component: CalculatorApp 
  },
  { 
    id: 'calendar', 
    name: 'Agenda', 
    icon: Calendar, 
    color: 'from-green-500 to-emerald-500', 
    component: CalendarApp 
  },
  { 
    id: 'mail', 
    name: 'Email', 
    icon: Mail, 
    color: 'from-indigo-500 to-blue-500', 
    component: EmailApp 
  },
  { 
    id: 'music', 
    name: 'Música', 
    icon: Music, 
    color: 'from-pink-500 to-rose-500', 
    component: MusicApp 
  },
  { 
    id: 'photos', 
    name: 'Fotos', 
    icon: Camera, 
    color: 'from-yellow-500 to-orange-500', 
    component: PhotosApp 
  },
];