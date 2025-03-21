import { ResponseDto } from "../dto/response.dto.ts";
import { UserUpdateDto } from "../dto/user-update.dto.ts";

import { mbFetch } from "../utils/fetch.utils.ts";

export async function fetchUserUpdateApi(
  dto: UserUpdateDto,
): Promise<ResponseDto> {
  return await mbFetch("/user/update/", {
    method: "PATCH",
    body: JSON.stringify(dto),
  });
}
