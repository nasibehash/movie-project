import { ResponseDto } from "../dto/response.dto.ts";

import { mbFetch } from "../utils/fetch.utils.ts";

export async function fetchAuthValidApi(): Promise<ResponseDto> {
  return mbFetch("/auth/valid");
}
