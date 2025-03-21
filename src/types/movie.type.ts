import { GenreType } from "./genre.type.ts";

export type MovieType = {
  backdrop_path: string;
  budget: number;
  genres: GenreType[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  revenue: number;
  status: string;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
};