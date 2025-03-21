import { ResponseDto } from "../dto/response.dto.ts";
import { SignUpDto } from "../dto/sign-up.dto.ts";

export async function fetchSignUpApi(
  dto: SignUpDto,
): Promise<ResponseDto<null, SignUpDto>> {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/auth/sign-up`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(dto),
    },
  );

  return await response.json();
}
