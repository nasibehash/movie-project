import { userSchema, UserType } from "../types/user.type.ts";

import { mbFetch } from "../utils/fetch.utils.ts";

export async function fetchUserApi(): Promise<UserType | null> {
  const data = await mbFetch<UserType>("/user");

  if ("error" in data) {
    return null;
  }

  const { success, data: user } = userSchema.safeParse(data.result);

  console.log("user", user);

  return success ? user : null;
}
