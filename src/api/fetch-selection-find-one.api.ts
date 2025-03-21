import { SelectionType } from "../types/selection.type.ts";

import { mbFetch } from "../utils/fetch.utils.ts";

export async function fetchSelectionFindOneApi(
  id?: string,
): Promise<SelectionType | null> {
  if (!id) {
    return null;
  }

  const data = await mbFetch<SelectionType>(`/selection/${id}`);

  if ("error" in data) {
    throw new Error(data.error);
  }

  return data.result;
}
