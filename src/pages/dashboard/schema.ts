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

  const Image = z.object({
    image: imageSchema,});

  export type Schema = z.infer<typeof Image>;
  export default Image;