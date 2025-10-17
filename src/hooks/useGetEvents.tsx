import { useEffect, useState } from "react";
import useGeoLocation from "./useGetLocation";
import type { Database } from "@/types/database.types";
import supabase from "@/supabase";

export type Event = "GIG" | "TALK" | "SOCIAL";
type EventsForCity = Database["public"]["Tables"]["events"]["Row"];

const useGetEvents = () => {
  const location = useGeoLocation();
  const [city, setCity] = useState<string | undefined>("Amsterdam");

  useEffect(() => {
    setCity(location?.city);
  }, [location]);

  const [events, setEvents] = useState<EventsForCity[] | []>([]);
  //   const [relatedEvents, setRelatedEvents] = useState<EventsForCity[] | []>([]);

  useEffect(() => {
    async function getEvents() {
      try {
        const { data, error } = await supabase
          .from("events")
          .select("*")
          .eq("city", city ?? "Amsterdam")
          .limit(10);

        if (error) {
          console.error("Supabase error:", error);
          return;
        }

        if (data) {
          setEvents(data);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    }

    getEvents();
  }, [city]);

  return events;
};

export default useGetEvents;
