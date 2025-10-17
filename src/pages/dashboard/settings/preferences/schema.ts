import { z } from "zod";

export const Preferences = z.object({
discover_events: z.boolean().optional(),
  friends_buy_ticket: z.boolean().optional(),
  organizer_announce_event: z.boolean().optional(),
  events_on_sale: z.boolean().optional(),
  events_liked: z.boolean().optional(),
  feature_update: z.boolean().optional(),
  event_sales_recap: z.boolean().optional(),
  reminder_for_next_event: z.boolean().optional(),
  confirmation_from_attendies: z.boolean().optional(),
});

export type Schema = z.infer<typeof Preferences>;
export default Preferences;