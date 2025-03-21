import { useQuery } from "@tanstack/react-query";

import { fetchGenresApi } from "../api/fetch-genres.api.ts";

export default function useGenresQuery() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenresApi,
    staleTime: Infinity,
  });
}
