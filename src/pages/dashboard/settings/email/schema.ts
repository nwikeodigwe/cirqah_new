import { z } from "zod";

export const Email = z.object({
    email: z
    .string()
    .min(1, { message: "Email is required" }) 
    .pipe(z.email("Enter a valid email address")),
})

export type Schema = z.infer<typeof Email>;
export default Email