
import React from 'react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer flex flex-col h-full">
      <div className="relative">
        <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
        {course.isLive && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1 uppercase tracking-wider animate-pulse">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            Live Now
          </div>
        )}
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-semibold text-emerald-700">
          {course.category}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-gray-800 text-lg leading-snug mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
          {course.title}
        </h3>
        <p className="text-gray-500 text-sm mb-4">by {course.educator}</p>
        
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 font-bold">★</span>
            <span className="text-gray-800 font-bold text-sm">{course.rating}</span>
            <span className="text-gray-400 text-xs">({course.reviewsCount.toLocaleString()})</span>
          </div>
          <span className="text-emerald-600 font-bold text-lg">{course.price}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
