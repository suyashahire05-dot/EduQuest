
import React, { useState } from 'react';
import { View } from './types';
import { CATEGORIES, COURSES, EDUCATORS } from './constants';
import Navbar from './components/Navbar';
import CourseCard from './components/CourseCard';
import EducatorCard from './components/EducatorCard';
import AITutor from './components/AITutor';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');

  const renderHome = () => (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6">
              India's largest <br />
              <span className="text-emerald-600">learning platform</span>
            </h1>
            <p className="text-gray-500 text-lg mb-10 max-w-lg">
              Preparing for UPSC, IIT JEE, NEET UG or SSC? Start your journey today with India's top educators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setCurrentView('courses')}
                className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-200"
              >
                Start Learning
              </button>
              <button className="bg-gray-100 text-gray-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all">
                Download App
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-50 rounded-full blur-3xl opacity-50"></div>
            <img 
              src="https://picsum.photos/seed/edu/800/600" 
              alt="Learning" 
              className="relative z-10 rounded-[40px] shadow-2xl border-8 border-white"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 animate-bounce">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" /></svg>
              </div>
              <div>
                <p className="font-bold text-gray-900">Live Classes</p>
                <p className="text-xs text-gray-500">Happening now</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Select your goal</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {CATEGORIES.map(cat => (
            <div key={cat.id} className="bg-white p-6 rounded-2xl border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{cat.icon}</div>
              <h3 className="font-bold text-gray-900 mb-1">{cat.name}</h3>
              <p className="text-gray-400 text-xs">{cat.count}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Courses */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Popular courses</h2>
          <button 
            onClick={() => setCurrentView('courses')}
            className="text-emerald-600 font-bold flex items-center gap-2 group"
          >
            See all <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COURSES.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Top Educators */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learn from the best</h2>
            <p className="text-gray-500">Top educators from across the country help you crack your exams.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {EDUCATORS.map(ed => (
              <EducatorCard key={ed.id} educator={ed} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-900 rounded-[40px] p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <h2 className="text-4xl font-bold text-white mb-6 relative z-10">Still confused? Talk to our experts.</h2>
          <p className="text-gray-400 mb-10 text-lg relative z-10">Get a 1-on-1 counseling session to choose your perfect plan.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <button className="bg-emerald-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-emerald-700 transition-all">
              Book Free Session
            </button>
            <button 
              onClick={() => setCurrentView('tutor')}
              className="bg-white/10 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/20 backdrop-blur-sm transition-all border border-white/20"
            >
              Ask AI Tutor
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  const renderCourses = () => (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Discover Courses</h1>
          <p className="text-gray-500">Explore over 50,000+ top-rated learning materials</p>
        </div>
        <div className="flex gap-4">
          <select className="bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-semibold outline-none focus:ring-2 ring-emerald-200">
            <option>All Categories</option>
            {CATEGORIES.map(c => <option key={c.id}>{c.name}</option>)}
          </select>
          <select className="bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-semibold outline-none focus:ring-2 ring-emerald-200">
            <option>Featured First</option>
            <option>Popularity</option>
            <option>Price: Low to High</option>
          </select>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {COURSES.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
        {/* Fill with some dummy duplicates to show grid */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
          <CourseCard key={i} course={{...COURSES[i % COURSES.length], id: `dummy-${i}`}} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navbar currentView={currentView} setView={setCurrentView} />
      
      <main className="animate-in fade-in duration-500">
        {currentView === 'home' && renderHome()}
        {currentView === 'courses' && renderCourses()}
        {currentView === 'tutor' && (
          <div className="py-12 px-4 md:px-8">
            <AITutor />
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">E</div>
              <span className="text-xl font-bold text-gray-800 tracking-tight">EduQuest</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Leading the revolution in education in India by making quality education accessible to everyone.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-emerald-600 transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Newsroom</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Contact us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Platform</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Browse Exams</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Live Classes</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Scholarships</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Plus Courses</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Stay Updated</h4>
            <p className="text-gray-500 text-xs mb-4 leading-relaxed">Join our newsletter to get the latest exam updates and study tips.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email address" className="bg-gray-100 border-none outline-none rounded-lg px-4 py-2 text-sm w-full" />
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-bold">Join</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium">
          <p>© 2024 EduQuest Education Private Limited. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
