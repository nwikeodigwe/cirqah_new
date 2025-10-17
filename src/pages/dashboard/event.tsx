import type { Database } from "@/types/database.types";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router";

export type Evnt = Database["public"]["Tables"]["events"]["Row"];
interface Props {
  event?: Evnt;
}

const Event = ({ event }: Props) => {
  return (
    <Link
      to={"/events/" + event?.id}
      className="relative flex-col bg-chicago-100 items-start gap-2 p-2 shadow-sm rounded-md min-w-[250px] hover:scale-105 transition-all duration-150"
    >
      <div className="relative h-52 w-full bg-chicago-200 rounded-md">
        <button className="absolute bottom-3 right-3">
          <MdFavoriteBorder />
        </button>
      </div>
      <div className="text-sm flex flex-col py-4">
        <h4 className="md:font-medium font-semibold text-base">
          {event?.title}
        </h4>
        <p className="text-sm text-chicago-500">{event?.title}</p>
        <p className="text-xs text-yellow-500 font-light">{event?.date}</p>
        <p className="w-fit border border-chicago-900 py-[2px] px-3 rounded-md text-xs mt-2">
          From €100
        </p>
      </div>
    </Link>
  );
};

export default Event;
