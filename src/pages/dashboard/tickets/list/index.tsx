import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { LuLayoutDashboard } from "react-icons/lu";
import Card from "../../ticket";
import { useEffect, useState } from "react";
import supabase from "@/supabase";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import type { Ticket } from "@/types/ticket.types";
import { FaListUl } from "react-icons/fa";
import { DropdownMenu } from "radix-ui";
import { BsDot } from "react-icons/bs";
import { CiCircleAlert } from "react-icons/ci";
import clsx from "clsx";

type Filter = "all" | "valid" | "expired";
type Order = "asc" | "desc";

const Index = () => {
  const [tickets, setTickets] = useState<Ticket[] | null>(null);
  const [filter, setFilter] = useState<Filter>("all");
  const [order, setOrder] = useState<Order>("asc");
  const [grid, setGrid] = useState<number>(1);
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    async function getTickets() {
      try {
        if (!user.id) return;
        const { data, error } = await supabase
          .from("tickets")
          .select(
            `
            *,
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
      } catch (err) {
        console.error(err);
      }
    }

    getTickets();
  }, [user]);

  const handleLayout = () => {
    if (grid === 1) {
      setGrid(2);
    } else {
      setGrid(1);
    }
  };

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-medium">Recently added</h3>
        <div className="flex items-center gap-4 text-2xl">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger
              className="bg-chicago-900 text-white rounded-md shadow-md p-1 hover:scale-105 active:scale-95 hover:shadow-lg transition-all duration-150 outline-none"
              asChild
            >
              <button aria-label="Customise options">
                <HiAdjustmentsHorizontal />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content className="bg-chicago-900 text-white rounded-md shadow-md text-sm mt-2">
                <DropdownMenu.RadioGroup
                  value={filter}
                  onValueChange={(value) => setFilter(value as Filter)}
                >
                  <DropdownMenu.RadioItem
                    value="all"
                    className="relative px-4 pt-2 py-1 border-none outline-none cursor-pointer hover:bg-chicago-950 flex justify-between items-center"
                  >
                    <span>All</span>
                    <DropdownMenu.ItemIndicator className="translate-x-4  text-chicago-500 text-2xl">
                      <BsDot />
                    </DropdownMenu.ItemIndicator>
                  </DropdownMenu.RadioItem>
                  <DropdownMenu.RadioItem
                    value="valid"
                    className="px-5 pt-2 py-1 border-none outline-none cursor-pointer hover:bg-chicago-950 flex justify-between items-center"
                  >
                    <span>Valid</span>
                    <DropdownMenu.ItemIndicator className="translate-x-4 text-chicago-500 text-2xl">
                      <BsDot />
                    </DropdownMenu.ItemIndicator>
                  </DropdownMenu.RadioItem>
                  <DropdownMenu.RadioItem
                    value="expired"
                    className="px-5 py-1 border-none outline-none cursor-pointer hover:bg-chicago-950 flex justify-between items-center"
                  >
                    <span>Expired</span>
                    <DropdownMenu.ItemIndicator className="translate-x-4  text-chicago-500 text-2xl">
                      <BsDot />
                    </DropdownMenu.ItemIndicator>
                  </DropdownMenu.RadioItem>
                  <DropdownMenu.RadioItem
                    value="date"
                    className="px-5 py-1 border-none outline-none cursor-pointer hover:bg-chicago-950 flex justify-between items-center"
                  >
                    <span>Date</span>
                    <DropdownMenu.ItemIndicator className="translate-x-4  text-chicago-500 text-2xl">
                      <BsDot />
                    </DropdownMenu.ItemIndicator>
                  </DropdownMenu.RadioItem>
                </DropdownMenu.RadioGroup>
                <DropdownMenu.Separator className="h-[1px] bg-chicago-700 border-none cursor-pointer" />
                <DropdownMenu.RadioGroup
                  value={order}
                  onValueChange={(value) => setOrder(value as Order)}
                >
                  <DropdownMenu.RadioItem
                    value="asc"
                    className="px-5 py-1 border-none outline-none cursor-pointer hover:bg-chicago-950 flex justify-between items-center"
                  >
                    <span>Ascending</span>
                    <DropdownMenu.ItemIndicator className="translate-x-4  text-chicago-500 text-2xl">
                      <BsDot />
                    </DropdownMenu.ItemIndicator>
                  </DropdownMenu.RadioItem>
                  <DropdownMenu.RadioItem
                    value="desc"
                    className="relative px-5 py-1 border-none outline-none cursor-pointer hover:bg-chicago-950 pb-2 flex justify-between items-center"
                  >
                    <span>Descending</span>
                    <DropdownMenu.ItemIndicator className="translate-x-4  text-chicago-500 text-2xl">
                      <BsDot />
                    </DropdownMenu.ItemIndicator>
                  </DropdownMenu.RadioItem>
                </DropdownMenu.RadioGroup>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          <button
            onClick={handleLayout}
            className="bg-chicago-900 text-white rounded-md shadow-md p-1 hover:scale-105 active:scale-95 transition-all duration-150"
          >
            {grid === 1 ? <LuLayoutDashboard /> : <FaListUl />}
          </button>
        </div>
      </div>
      <hr className="text-chicago-200 my-3" />
      <div
        className={clsx("grid gap-4", {
          "grid-cols-2": grid === 2,
          "grid-cols-1": grid === 1,
        })}
      >
        {!tickets?.length ? (
          <div className="bg-chicago-100 p-3 rounded-sm flex items-center  text-chicago-500 col-span-2 gap-2">
            <CiCircleAlert />
            <span className="text-sm">
              You haven't purchased any tickets yet. Once you do, you'll find
              them here.
            </span>
          </div>
        ) : (
          tickets?.map((ticket, i) => <Card key={i} ticket={ticket} />)
        )}
      </div>
    </div>
  );
};

export default Index;
