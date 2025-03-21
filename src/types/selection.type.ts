import { MovieListItemType } from "./movie-list-item.type.ts";

export type SelectionType = {
  id: number;
  name: string;
  description: string;
  movies: MovieListItemType[];
};
