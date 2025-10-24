import { z } from "zod";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];
const MAX_FILE_SIZE = 20 * 1024 * 1024;

const imageSchema = z
  .instanceof(File)
  .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
    message: "Only .jpg and .png files are allowed.",
  })
  .refine((file) => file.size <= MAX_FILE_SIZE, {
    message: "File size must be less than 20MB.",
  })
  .optional();

const Event = z.object({
  image: imageSchema,
  title: z.string().min(1, "Title is required").default(""),
  summary: z
    .string()
    .max(140, "Summary must be 140 characters or less")
    .default(""),
  event_type: z.string().default("single"),
  location_type: z
    .enum(["in-person", "online", "to-be-announced"])
    .default("in-person"),
  date: z.string().min(1, "Date is required").default(""),
  start_time: z.string().min(1, "Start time is required").default(""),
  end_time: z.string().min(1, "End time is required").default(""),
  venue: z.string().nullable().default(null),
  address: z.string().nullable().default(null),
  city: z.string().nullable().default(null),
  state: z.string().nullable().default(null),
  postal_code: z.string().nullable().default(null),
  country: z.string().nullable().default(null),
  lineup_title: z.string().nullable().default(null),
  lineup_tagline: z.string().nullable().default(null),
  lineup_description: z.string().nullable().default(null),
});

export type Schema = z.infer<typeof Event>;
export default Event;
