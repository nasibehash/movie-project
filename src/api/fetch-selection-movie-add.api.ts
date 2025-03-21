import { ResponseDto } from "../dto/response.dto.ts";
import { SelectionMovieAddDto } from "../dto/selection-movie-add.dto.ts";

import { mbFetch } from "../utils/fetch.utils.ts";

type Options = {
  id: number;
  dto: SelectionMovieAddDto;
};

export async function fetchSelectionMovieAddApi({
  id,
  dto,
}: Options): Promise<ResponseDto> {
  return await mbFetch(`/selection/${id}/movie`, {
    method: "POST",
    body: JSON.stringify(dto),
  });
}
