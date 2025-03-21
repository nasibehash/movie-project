import { useQuery } from "@tanstack/react-query";

import { fetchUserApi } from "../api/fetch-user.api.ts";

import { UserType } from "../types/user.type.ts";

export function useUser(): UserType | null {
  const { data, isPending, isError } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUserApi,
    staleTime: Infinity,
    retry: 0,
  });

  if (isPending || isError) {
    return null;
  }

  return data;
}
