import type { Database } from "@/types/database.types";
import clsx from "clsx";
import { Link } from "react-router";

interface Props {
  event: Database["public"]["Tables"]["events"]["Row"];
}
const Event = ({ event }: Props) => {
  return (
    <div className={clsx("col-span-7 shadow-md  transition-all duration-150 bg-cover bg-center h-[300px]", `bg-[url('${event.image_url}')]`)}>
        <div className="space-y-1 align-bottom p-5 bg-gradient-to-t from-black/70 to-transparent h-full flex flex-col justify-end text-white">
          <h4 className="text-2xl font-medium">{event.title}.</h4>
          <p className="text-xs text-chicago-100">{event.venue}</p>
          <p className="text-xs font-light">{event.date}</p>
          <p className="text-xs text-chicago-900">
            Starts from ${event.amount}
          </p>
           <Link to="#" className="text-sm px-4 py-2 bg-green text-white shadow-md w-fit">
            Buy ticket
          </Link>
        </div>
    </div>
  );
};

export default Event;
