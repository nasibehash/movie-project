import { ResponseDto } from "../dto/response.dto.ts";

export async function mbFetch<TResult = void, TFields = void>(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<ResponseDto<TResult, TFields>> {
  const [response, data] = await fetchWithAutoRefreshToken<TResult, TFields>(
    input,
    init,
  );

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}

export async function fetchWithAutoRefreshToken<TResult = void, TFields = void>(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<[Response, ResponseDto<TResult, TFields>]> {
  const [response, data] = await tryToFetch<TResult, TFields>(input, init);

  if (!response.ok) {
    if (response.status === 401 && data.message === "Unauthorized") {
      const [refreshResponse, refreshData] = await tryToFetch<TResult, TFields>(
        "/auth/refresh",
      );

      if (refreshResponse.ok) {
        return await tryToFetch<TResult, TFields>(input, init);
      }

      return [refreshResponse, refreshData];
    }
  }

  return [response, data];
}

export async function tryToFetch<TResult = void, TFields = void>(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<[Response, ResponseDto<TResult, TFields>]> {
  if (!init) {
    init = {};
  }

  init = {
    credentials: "include",
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init.headers,
    },
  };

  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}${input}`,
    init,
  );

  const data = await response.json();

  return [response, data];
}
