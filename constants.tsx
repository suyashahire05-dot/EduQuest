
import React from 'react';
import { Course, Educator, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'upsc', name: 'UPSC CSE', icon: '🏛️', count: '15k+ courses' },
  { id: 'jee', name: 'IIT JEE', icon: '🧪', count: '10k+ courses' },
  { id: 'neet', name: 'NEET UG', icon: '🩺', count: '8k+ courses' },
  { id: 'ssc', name: 'SSC Exams', icon: '📄', count: '12k+ courses' },
  { id: 'banking', name: 'Bank Exams', icon: '🏦', count: '9k+ courses' },
  { id: 'gate', name: 'GATE & ESE', icon: '⚙️', count: '7k+ courses' },
];

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Comprehensive Course on Indian Economy',
    educator: 'Mrunal Patel',
    rating: 4.9,
    reviewsCount: 15420,
    price: '₹12,000',
    thumbnail: 'https://picsum.photos/seed/economy/400/225',
    category: 'UPSC CSE',
    isLive: true
  },
  {
    id: '2',
    title: 'Advanced Mechanics for JEE Main/Advanced',
    educator: 'Nitin Sachan',
    rating: 4.8,
    reviewsCount: 8900,
    price: '₹8,500',
    thumbnail: 'https://picsum.photos/seed/physics/400/225',
    category: 'IIT JEE'
  },
  {
    id: '3',
    title: 'Biology Crash Course for NEET UG 2024',
    educator: 'Pranav Pundarik',
    rating: 4.7,
    reviewsCount: 12100,
    price: '₹5,000',
    thumbnail: 'https://picsum.photos/seed/biology/400/225',
    category: 'NEET UG',
    isLive: true
  },
  {
    id: '4',
    title: 'Logical Reasoning: Complete Mastery',
    educator: 'Sahil Khandelwal',
    rating: 4.6,
    reviewsCount: 5600,
    price: '₹3,200',
    thumbnail: 'https://picsum.photos/seed/reasoning/400/225',
    category: 'SSC Exams'
  }
];

export const EDUCATORS: Educator[] = [
  {
    id: 'e1',
    name: 'Mrunal Patel',
    subject: 'Economics',
    watchMinutes: '2.5B+',
    avatar: 'https://picsum.photos/seed/mrunal/150/150',
    bio: 'Renowned expert in Indian Economy and Civil Services preparation.'
  },
  {
    id: 'e2',
    name: 'Nitin Sachan',
    subject: 'Physics',
    watchMinutes: '1.2B+',
    avatar: 'https://picsum.photos/seed/nitin/150/150',
    bio: 'Passionate Physics teacher helping thousands crack engineering entrance exams.'
  },
  {
    id: 'e3',
    name: 'Sudhanshu Rai',
    subject: 'History',
    watchMinutes: '800M+',
    avatar: 'https://picsum.photos/seed/sudhanshu/150/150',
    bio: 'Master storyteller of World and Indian History.'
  }
];
