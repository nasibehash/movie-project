import { z } from "zod";

export const userUpdateSchema = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .min(3, {
      message: "Username must be longer than or equal to 3 characters",
    })
    .max(16, {
      message: "Username must be shorter than or equal to 16 characters",
    }),
  email: z.union([z.literal(""), z.string().email("Email must be valid.")]),
  firstName: z.string(),
  lastName: z.string(),
});

export type UserUpdateDto = z.infer<typeof userUpdateSchema>;
