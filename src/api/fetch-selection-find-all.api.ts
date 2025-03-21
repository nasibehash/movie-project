import { SelectionType } from "../types/selection.type.ts";

import { mbFetch } from "../utils/fetch.utils.ts";

export async function fetchSelectionFindAllApi(): Promise<SelectionType[]> {
  const data = await mbFetch<SelectionType[]>("/selection");

  if ("error" in data) {
    throw new Error(data.error);
  }

  return data.result;
}
