import { useEffect, useState } from "react";
import Stats from "./stat";
import supabase from "@/supabase";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

type Stats = {
  total: number | null;
  sold: number | null;
  bought: number | null;
};

const Index = () => {
  const [stats, setStats] = useState<Stats>({ total: 0, sold: 0, bought: 0 });
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    async function getTotal() {
      try {
        if (!user.id) return;
        const [sold, bought] = await Promise.all([
          supabase
            .from("tickets")
            .select("*", { count: "exact", head: true })
            .eq("user_id", user.id),
          supabase
            .from("tickets")
            .select("*", { count: "exact", head: true })
            .eq("events.user_id", user.id),
        ]);

        if (!sold.error && !bought.error && sold.count && bought.count) {
          const total = sold.count + bought.count;
          setStats({
            total: total,
            sold: sold.count,
            bought: bought.count,
          });
        }
      } catch (err) {
        console.error(err);
      }
    }

    getTotal();
  });
  return (
    <div className="grid grid-cols-3 gap-3">
      <Stats count={stats.total} desc="Total number of tickets" />
      <Stats count={stats.sold} desc="Total number of tickets sold" />
      <Stats count={stats.bought} desc="Total number of tickets bought" />
    </div>
  );
};

export default Index;
