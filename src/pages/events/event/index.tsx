import supabase from "@/supabase";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import Related from "./related";
import Machandise from "./machandise";
import type { Database } from "@/types/database.types";

type Events = Database["public"]["Tables"]["events"]["Row"];

const Index = () => {
  const { slug } = useParams();
  const [relatedEvents, setRelatedEvents] = useState<Events[] | []>([]);
  const [event, setEvent] = useState<Events | null>(null);

  useEffect(() => {
    async function getEvent() {
      try {
        if (!slug) return;
        const { data, error } = await supabase
          .from("events")
          .select("*")
          .eq("slug", slug)
          .limit(1)
          .single();

        if (!error) return setEvent(data);
      } catch (err) {
        console.error(err);
      }
    }

    getEvent();
  });

  useEffect(() => {
    async function getRelatedEvents() {
      try {
        const { data, error } = await supabase
          .from("events")
          .select(`*`)
          .limit(10);

        if (!error) setRelatedEvents(data);
      } catch (err) {
        console.error(err);
      }
    }

    getRelatedEvents();
  });

  return (
    <>
      <div className="bg-chicago-900 py-16">
        <section className="container px-5">
          <div className="h-[500px] bg-chicago-700 relative">
            <div className="absolute top-0 right-0 left-0 h-full bg-[linear-gradient(271deg,rgba(0,0,0,0)_0.78%,#151414_105.22%)] z-10"></div>
          </div>
          <div className="space-y-4 mt-5">
            <div className="space-y-2">
              <h2 className="text-white-green text-2xl font-medium">
                {event?.title}
              </h2>
              <span className="flex items-center gap-3 text-chicago-400 border border-chicago-400 w-fit p-1 text-xs">
                <CiCalendarDate className="text-xl " />
                {`${event?.date} ${event?.start_time}`}
              </span>
              <p className="flex items-center gap-2 text-chicago-500 text-sm">
                <CiLocationOn className="text-xl" /> {event?.venue}
              </p>
            </div>
            <p className="text-chicago-300 text-sm leading-6">
              {event?.summary}
            </p>
            <Link
              to=""
              className="px-10 py-3 text-white-green bg-green shadow text-sm"
            >
              Buy Ticket
            </Link>
          </div>
        </section>
        <Machandise />
        <Related data={relatedEvents} />
      </div>
    </>
  );
};

export default Index;
