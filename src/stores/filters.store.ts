import { create } from "zustand";

import { FiltersType } from "../types/filters.type.ts";
import { GenreType } from "../types/genre.type.ts";

type FiltersStore = {
  filters: FiltersType;
  toggleGenre: (genre: GenreType) => void;
};

export const useFiltersStore = create<FiltersStore>((set) => ({
  filters: {
    genres: [],
  },
  toggleGenre: (genre: GenreType) => {
    set((old) => {
      const index = old.filters.genres.findIndex((x) => x.id === genre.id);

      if (index === -1) {
        return {
          filters: { ...old.filters, genres: [...old.filters.genres, genre] },
        };
      }

      const clone = [...old.filters.genres];
      clone.splice(index, 1);
      return { filters: { ...old.filters, genres: clone } };
    });
  },
}));
