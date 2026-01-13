
export interface Course {
  id: string;
  title: string;
  educator: string;
  rating: number;
  reviewsCount: number;
  price: string;
  thumbnail: string;
  category: string;
  isLive?: boolean;
}

export interface Educator {
  id: string;
  name: string;
  subject: string;
  watchMinutes: string;
  avatar: string;
  bio: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: string;
}

export type View = 'home' | 'courses' | 'tutor';
