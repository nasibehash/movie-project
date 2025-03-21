import { ResponseDto } from "../dto/response.dto.ts";
import { SelectionMovieRemoveDto } from "../dto/selection-movie-remove.dto.ts";

import { mbFetch } from "../utils/fetch.utils.ts";

type Options = {
  id: string;
  dto: SelectionMovieRemoveDto;
};

export async function fetchSelectionMovieRemoveApi({
  id,
  dto,
}: Options): Promise<ResponseDto> {
  return await mbFetch(`/selection/${id}/movie`, {
    method: "DELETE",
    body: JSON.stringify(dto),
  });
}
