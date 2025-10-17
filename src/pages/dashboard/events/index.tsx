import { IoMdAdd } from "react-icons/io";
import Stat from "../stat";
import Overview from "./list";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import supabase from "@/supabase";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

type Stats = { hosted: number; attended: number };

const Index = () => {
  const user = useSelector((state: RootState) => state.user);
  const [stats, setStats] = useState<Stats>({ hosted: 0, attended: 0 });

  useEffect(() => {
    async function getStat() {
      try {
        if (!user.id) return;
        const [host, attend] = await Promise.all([
          supabase
            .from("events")
            .select("*", { count: "exact", head: true })
            .eq("user_id", user.id),
          supabase
            .from("tickets")
            .select("*", { count: "exact", head: true })
            .eq("user_id", user.id)
            .neq("event.user_id", user.id),
        ]);

        if (!host.error && attend.error)
          setStats({ hosted: host.count ?? 0, attended: attend.count ?? 0 });
      } catch (err) {
        console.error(err);
      }
    }

    getStat();
  });

  return (
    <div className="container py-5 overflow-y-scroll h-[90vh]">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl mb-5">Events</h3>
        <Link
          to="/events/create"
          className="p-2 rounded-md bg-chicago-900 text-white hover:scale-105 transition-all duration-150"
        >
          <IoMdAdd />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Stat count={stats.hosted} desc="Total events hosted" />
        <Stat count={stats.attended} desc="Total events attended" />
      </div>
      <Overview />
    </div>
  );
};

export default Index;
