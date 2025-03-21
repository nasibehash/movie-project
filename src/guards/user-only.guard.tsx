import { ReactElement } from "react";

import { Navigate, Outlet } from "react-router";

import { useQuery } from "@tanstack/react-query";

import { fetchAuthValidApi } from "../api/fetch-auth-valid.api.ts";

import LoadingComponent from "../components/loading/loading.component.tsx";

export default function UserOnlyGuard(): ReactElement {
  const { isFetching, isError } = useQuery({
    queryKey: ["userOnlyGuard"],
    queryFn: fetchAuthValidApi,
    staleTime: 0,
    retry: 0,
  });

  if (isFetching) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  return <Outlet />;
}
