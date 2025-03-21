import { ResponseDto } from "../dto/response.dto.ts";

import { mbFetch } from "../utils/fetch.utils.ts";

export async function fetchSelectionClearApi(id: string): Promise<ResponseDto> {
  return await mbFetch(`/selection/${id}/clear`);
}
