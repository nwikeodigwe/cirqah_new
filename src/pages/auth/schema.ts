import * as z from "zod";

const Schema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .pipe(z.email("Invalid email address")),
});

export type Login = z.infer<typeof Schema>;
export default Schema;
