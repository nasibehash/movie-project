import { ResponseDto } from "../dto/response.dto.ts";

export async function fetchSignOutApi(): Promise<ResponseDto> {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/auth/sign-out`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    },
  );

  return await response.json();
}
