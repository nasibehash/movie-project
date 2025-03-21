import { GenreType } from "../types/genre.type.ts";

export async function fetchGenresApi(): Promise<GenreType[]> {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/genre/movie/list`,
  );

  const data = await response.json();

  return data.genres;
}
