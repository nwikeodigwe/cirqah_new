import type { Database } from "@/types/database.types";

export type Ticket = Database["public"]["Tables"]["tickets"]["Row"] & {
  event: {
    title: string | null;
    start_time: string | null;
    date: string | null;
    city: string | null;
    amount: number | null;
    venue: string | null;
  } | null;
};
