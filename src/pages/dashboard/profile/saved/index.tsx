import { useEffect, useState } from "react";
import Event from "./event";
import { Link } from "react-router";
import type { Database } from "@/types/database.types";
import supabase from "@/supabase";
import clsx from "clsx";

export type Favorite =
  Database["public"]["Tables"]["favorited_events"]["Row"] & {
    event: {
      title: string | null;
      summary: string | null;
      start_time: string | null;
      date: string | null;
      city: string | null;
      amount: number | null;
    } | null;
  };

const Index = () => {
  const [favorites, setFavorites] = useState<Favorite[] | null>(null);

  useEffect(() => {
    async function getFavoritedEvents() {
      const { data, error } = await supabase
        .from("favorited_events")
        .select(
          `*,
          event:events (
            title,
            summary,
            start_time,
            date,
            city,
            amount
          )
        `
        )
        .limit(3);

      if (!error) setFavorites(data);
    }

    getFavoritedEvents();
  }, []);

  return (
    <div className={clsx("mt-10", !favorites?.length && "hidden")}>
      <div className="flex items-center justify-between">
        <h3 className="font-medium mb-3">Favorited Events</h3>
        <Link
          to="/dashboard/favorite"
          className="text-xs font-light text-chicago-900 hover:underline transition-all duration-150 -translate-y-1"
        >
          View all
        </Link>
      </div>
      <hr className="text-chicago-200" />
      <div className="mt-5 space-y-5">
        {favorites?.map((favorite, i) => (
          <Event key={i} favorite={favorite} />
        ))}
      </div>
    </div>
  );
};

export default Index;
