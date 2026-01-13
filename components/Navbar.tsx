
import React from 'react';
import { View } from '../types';

interface NavbarProps {
  currentView: View;
  setView: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3 md:px-8 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div 
          onClick={() => setView('home')} 
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:bg-emerald-600 transition-colors">
            E
          </div>
          <span className="text-2xl font-bold text-gray-800 tracking-tight hidden sm:block">EduQuest</span>
        </div>

        <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-96 gap-3 focus-within:ring-2 ring-emerald-200 transition-all">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <input 
            type="text" 
            placeholder="Search for courses, educators, exams..." 
            className="bg-transparent border-none outline-none text-sm w-full placeholder:text-gray-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button 
          onClick={() => setView('courses')}
          className={`text-sm font-medium ${currentView === 'courses' ? 'text-emerald-600' : 'text-gray-600 hover:text-emerald-600'}`}
        >
          Explore
        </button>
        <button 
          onClick={() => setView('tutor')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${currentView === 'tutor' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'}`}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>
          AI Tutor
        </button>
        <button className="bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
