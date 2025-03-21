import { ResponseDto } from "../dto/response.dto.ts";
import { SelectionUpdateDto } from "../dto/selection-update.dto.ts";

import { mbFetch } from "../utils/fetch.utils.ts";

type Options = {
  id: string;
  dto: SelectionUpdateDto;
};

export async function fetchSelectionUpdateApi({
  id,
  dto,
}: Options): Promise<ResponseDto> {
  return await mbFetch(`/selection/${id}`, {
    method: "PUT",
    body: JSON.stringify(dto),
  });
}
