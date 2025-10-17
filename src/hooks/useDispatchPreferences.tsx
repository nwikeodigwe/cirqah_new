import { useEffect, useState } from "react";
// import type { Location } from "@/types/location.type";
import type { Session } from "@supabase/supabase-js";
import supabase from "@/supabase";
import { useDispatch } from "react-redux";
import { set_preferences } from "@/features/preferences/slice";
import type { Database } from "@/types/database.types";

type Preferences = Database["public"]["Tables"]["preferences"]["Row"];

const useDispatchPreferences = (session: Session | null) => {
  const dispatch = useDispatch();
  const [preferences, setPreferences] = useState<Preferences | null>(null);

  useEffect(() => {
    async function dispatchPreferences() {
      if (!session?.user.id) return;
      const { data, error } = await supabase
        .from("preferences")
        .select("*")
        .eq("id", session.user.id)
        .limit(1)
        .single();
      if (!error) {
        setPreferences(data);
        dispatch(
          set_preferences({
            discover_events: data.discover_events,
            friends_buy_ticket: data.friends_buy_ticket,
            organizer_announce_event: data.organizer_announce_event,
            events_on_sale: data.events_on_sale,
            events_liked: data.events_liked,
            feature_update: data.feature_update,
            event_sales_recap: data.event_sales_recap,
            reminder_for_next_event: data.reminder_for_next_event,
            confirmation_from_attendies: data.confirmation_from_attendies,
          })
        );
      }
    }

    dispatchPreferences();
  });

  return preferences;
};

export default useDispatchPreferences;
