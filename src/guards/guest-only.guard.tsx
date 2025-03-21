import { ReactElement } from "react";

import { Navigate, Outlet } from "react-router";

import { useQuery } from "@tanstack/react-query";

import { fetchAuthValidApi } from "../api/fetch-auth-valid.api.ts";

import LoadingComponent from "../components/loading/loading.component.tsx";

export default function GuestOnlyGuard(): ReactElement {
  const { isFetching, isError } = useQuery({
    queryKey: ["guestOnlyGuard"],
    queryFn: fetchAuthValidApi,
    staleTime: 0,
    retry: 0,
  });

  if (isFetching) {
    return <LoadingComponent />;
  }

  if (!isError) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}
