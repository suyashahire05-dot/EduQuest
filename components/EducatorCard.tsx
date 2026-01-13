
import React from 'react';
import { Educator } from '../types';

interface EducatorCardProps {
  educator: Educator;
}

const EducatorCard: React.FC<EducatorCardProps> = ({ educator }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center hover:border-emerald-200 hover:bg-emerald-50/30 transition-all cursor-pointer">
      <div className="relative inline-block mb-4">
        <img src={educator.avatar} alt={educator.name} className="w-24 h-24 rounded-full border-4 border-emerald-100 mx-auto" />
        <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-1 border-2 border-white">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L9 10.586l3.293-3.293a1 1 0 011.414 1.414z" /></svg>
        </div>
      </div>
      <h4 className="font-bold text-gray-900 text-lg mb-1">{educator.name}</h4>
      <p className="text-emerald-600 text-sm font-semibold mb-3">{educator.subject}</p>
      <div className="flex items-center justify-center gap-1 text-gray-500 text-xs mb-4">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>{educator.watchMinutes} watch mins</span>
      </div>
      <button className="w-full py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-semibold hover:bg-emerald-600 hover:text-white transition-all">
        Follow
      </button>
    </div>
  );
};

export default EducatorCard;
