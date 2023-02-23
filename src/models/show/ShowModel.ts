export interface Show {
  id: string;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  image: Images;
  summary: string;
}

interface Schedule {
  time: string;
  days: string[];
}

interface Rating {
  average: number;
}

interface Images {
  medium: string;
  original: string;
}
