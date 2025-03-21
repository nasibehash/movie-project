import { ResponseDto } from "../dto/response.dto.ts";

import { mbFetch } from "../utils/fetch.utils.ts";

export async function fetchSelectionRemoveApi(
  id: number,
): Promise<ResponseDto> {
  return await mbFetch(`/selection/${id}`, {
    method: "DELETE",
  });
}
