//typescript types:
export interface FilmRespnseType {
  _id: string;
  title: string;
  description: string;
  price: number;
  img: string;
  director: string;
  duration: number;
  featured: boolean;
}

export interface FilmsRespnseType {
  films: FilmRespnseType[];
}

export interface AddFilmRequest {
  title: string;
  description: string;
  price: number;
  director: string;
  img: string;
  duration: number;
  featured: boolean;
}
