import { useQuery } from "@tanstack/react-query";

import { fetchConfigurationApi } from "../api/fetch-configuration.api.ts";

export default function useConfigurationQuery() {
  return useQuery({
    queryKey: ["configuration"],
    queryFn: fetchConfigurationApi,
    staleTime: Infinity,
  });
}
