import { ResponseDto } from "../dto/response.dto.ts";
import { SignInDto } from "../dto/sign-in.dto.ts";

export async function fetchSignInApi(
  dto: SignInDto,
): Promise<ResponseDto<null, SignInDto>> {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/auth/sign-in`,
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
