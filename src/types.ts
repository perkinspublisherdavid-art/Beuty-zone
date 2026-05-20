export interface Treatment {
  id: string;
  name: string;
  category: 'injectables' | 'skin' | 'wellness';
  description: string;
  benefits: string[];
  duration: string;
  price: string;
  recommendedFor: string[];
}

export interface Practitioner {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  specialties: string[];
  imageUrl: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  treatment: string;
}

export interface SkinConcern {
  id: string;
  name: string;
  description: string;
  suitableTreatments: string[]; // references Treatment IDs
}
