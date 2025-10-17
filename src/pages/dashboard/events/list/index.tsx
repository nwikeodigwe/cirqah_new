import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { LuLayoutDashboard } from "react-icons/lu";
import { useEffect, useState } from "react";
import type { Database } from "@/types/database.types";
import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import supabase from "@/supabase";
import Event from "../../event";
import { DropdownMenu } from "radix-ui";
import { BsDot } from "react-icons/bs";
import clsx from "clsx";
import { FaListUl } from "react-icons/fa";
import { CiCircleAlert } from "react-icons/ci";

export type Events = Database["public"]["Tables"]["events"]["Row"];
type Filter = "all" | "recent" | "favorite" | "hosting";
type Order = "asc" | "desc";

const Index = () => {
  const [events, setEvents] = useState<Events[] | null>(null);
  const [filter, setFilter] = useState<Filter>("all");
  const [order, setOrder] = useState<Order>("asc");
  const [grid, setGrid] = useState<number>(1);
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    async function getEvents() {
      try {
        if (!user.id) return;
        const { data, error } = await supabase
          .from("events")
          .select("*")
          .eq("user_id", user.id);

        if (!error) setEvents(data);
      } catch (err) {
        console.error(err);
      }
    }

    getEvents();
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
                    className="relative px-5 pt-2 rounded-t-md py-1 border-none outline-none cursor-pointer hover:bg-chicago-950 flex justify-between items-center"
                  >
                    <span>All</span>
                    <DropdownMenu.ItemIndicator className="translate-x-4  text-chicago-500 text-2xl">
                      <BsDot />
                    </DropdownMenu.ItemIndicator>
                  </DropdownMenu.RadioItem>
                  <DropdownMenu.RadioItem
                    value="upcoming"
                    className="px-5 pt-2 py-1 border-none outline-none cursor-pointer hover:bg-chicago-950 flex justify-between items-center"
                  >
                    <span>Upcoming</span>
                    <DropdownMenu.ItemIndicator className="translate-x-4 text-chicago-500 text-2xl">
                      <BsDot />
                    </DropdownMenu.ItemIndicator>
                  </DropdownMenu.RadioItem>
                  <DropdownMenu.RadioItem
                    value="hosted"
                    className="px-5 py-1 border-none outline-none cursor-pointer hover:bg-chicago-950 flex justify-between items-center"
                  >
                    <span>Hosted</span>
                    <DropdownMenu.ItemIndicator className="translate-x-4  text-chicago-500 text-2xl">
                      <BsDot />
                    </DropdownMenu.ItemIndicator>
                  </DropdownMenu.RadioItem>
                  <DropdownMenu.RadioItem
                    value="attending"
                    className="px-5 py-1 border-none outline-none cursor-pointer hover:bg-chicago-950 flex justify-between items-center"
                  >
                    <span>Attending</span>
                    <DropdownMenu.ItemIndicator className="translate-x-4  text-chicago-500 text-2xl">
                      <BsDot />
                    </DropdownMenu.ItemIndicator>
                  </DropdownMenu.RadioItem>
                  <DropdownMenu.RadioItem
                    value="favorite"
                    className="px-5 py-1 border-none outline-none cursor-pointer hover:bg-chicago-950 flex justify-between items-center"
                  >
                    <span>Favorite</span>
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
                    className="relative px-5 py-1 border-none outline-none cursor-pointer hover:bg-chicago-950 pb-2 flex justify-between items-center rounded-b-md"
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
            className="bg-chicago-900 text-white rounded-md shadow-md p-1 hover:scale-105 transition-all duration-150"
          >
            {grid === 1 ? <LuLayoutDashboard /> : <FaListUl />}
          </button>
        </div>
      </div>
      <hr className="text-chicago-200 my-3" />
      <div
        className={clsx("grid  gap-4 mt-2", {
          "grid-cols-2": grid === 2,
          "grid-cols-1": grid === 1,
        })}
      >
        {" "}
        {!events?.length ? (
          <div className="bg-chicago-100 p-3 rounded-sm flex items-center  text-chicago-500 col-span-2 gap-2">
            <CiCircleAlert />
            <span className="text-sm">
              You currently have no events yet, If you do, they'll show up here
            </span>
          </div>
        ) : (
          events?.map((event, i) => <Event key={i} event={event} />)
        )}
      </div>
    </div>
  );
};

export default Index;
