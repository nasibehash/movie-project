import { SelectionCreateDto } from "../dto/selection-create.dto.ts";

import { mbFetch } from "../utils/fetch.utils.ts";
import { ResponseDto } from "../dto/response.dto.ts";

export async function fetchSelectionCreateApi(
  dto: SelectionCreateDto,
): Promise<ResponseDto> {
  return await mbFetch("/selection", {
    method: "POST",
    body: JSON.stringify(dto),
  });
}
