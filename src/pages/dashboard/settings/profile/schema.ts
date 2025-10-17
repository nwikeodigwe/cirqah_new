import { z } from "zod";

const PREFIX = [
  "MR",
  "MRS",
  "MS",
  "MX",
  "MISS",
  "DR",
  "REV",
  "PROF",
] as const;

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];
const MAX_FILE_SIZE = 20 * 1024 * 1024;

const imageSchema = z.instanceof(File).refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
    message: "Only .jpg and .png files are allowed.",
}).refine((file) => file.size <= MAX_FILE_SIZE, {
    message: "File size must be less than 20MB.",
}).optional();

const prefixEnum = z.enum(PREFIX);


export const Profile = z.object({
    image: imageSchema,
    prefix: prefixEnum.nullable(),
  first_name: z.string().nullable(),
  last_name: z.string().nullable(),
  suffix: z.string().nullable(),
  home_phone: z.string().nullable(),
  phone: z.string().optional(),
  job_title: z.string().nullable(),
  company: z.string().nullable(),
  address: z.string().nullable(),
  website: z.url("Should be a valid website address").nullable(),
  blog: z.url("Should be a valid blog address").nullable(),
  postal_code: z.string().nullable(),
  country: z.string().nullable(),
home_address: z.string().nullable(),
    home_address_2: z.string().nullable(),
    home_city: z.string().optional(),
    home_country: z.string().nullable(),
    home_postal_code: z.string().nullable(),
    home_state: z.string().nullable(),
  billing_address: z.string().nullable(),
    billing_address_2: z.string().nullable(),
    billing_city: z.string().nullable(),
    billing_country: z.string().nullable(),
    billing_postal_code: z.string().nullable(),
    billing_state: z.string().nullable(),
  shipping_address: z.string().nullable(),
    shipping_address_2: z.string().nullable(),
    shipping_city: z.string().nullable(),
    shipping_country: z.string().nullable(),
    shipping_postal_code: z.string().nullable(),
    shipping_state: z.string().nullable(),
  company_address: z.string().nullable(),
    company_address_2: z.string().nullable(),
    company_city: z.string().nullable(),
    company_country: z.string().nullable(),
    company_postal_code: z.string().nullable(),
  company_state: z.string().nullable(),
});

export type Schema = z.infer<typeof Profile>;
export default Profile
