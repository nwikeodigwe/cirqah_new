import { Link } from "react-router";
import { useEffect, useState } from "react";
import supabase from "@/supabase";
import { useSelector } from "react-redux";
import Card from "../../ticket";
import type { RootState } from "@/store";
import type { Ticket } from "@/types/ticket.types";
import clsx from "clsx";

const Index = () => {
  const [tickets, setTickets] = useState<Ticket[] | null>(null);
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    async function getTickets() {
      if (!user.id) return;
      const { data, error } = await supabase
        .from("tickets")
        .select(
          `*,
        event:events (
          title,
          start_time,
          date,
          city,
          amount,
          venue
        )`
        )
        .eq("user_id", user.id);

      if (!error) setTickets(data);
    }

    getTickets();
  });

  return (
    <div className={clsx("mt-10", !tickets?.length && "hidden")}>
      <div className="flex items-center justify-between">
        <h3 className="font-medium mb-3">Your Tickets</h3>
        <Link
          to="/dashboard/tickets"
          className="text-xs font-light text-chicago-900 hover:underline transition-all duration-150 -translate-y-1"
        >
          View all
        </Link>
      </div>

      <hr className="text-chicago-200" />
      <div className="mt-5 space-y-5">
        {tickets?.map((ticket, i) => (
          <Card key={i} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Index;
