import type { Database } from "@/types/database.types";
import clsx from "clsx";
import { Link } from "react-router";

interface Props {
  event: Database["public"]["Tables"]["events"]["Row"];
  className?: string;
}
const Card = ({ event, className }: Props) => {
  return (
    <Link
      to={`/events/${event.slug}`}
      className={clsx("space-y-2 min-w-[230px]", className)}
    >
      <div
        className={`h-[300px] bg-[url(${event.image_url})] bg-chicago-800 bg-cover bg-center`}
      ></div>
      <h2 className="text-white-green font-medium text-lg">{event.title}</h2>
      <div className="flex flex-wrap items-center gap-3 mt-2">
        <span className="border border-chicago-600 text-chicago-300 p-1 shadow text-sm">
          {event.date}
        </span>
        <span className="border text-chicago-300 border-chicago-600 p-1 shadow text-sm">
          {event.venue}
        </span>
      </div>
    </Link>
  );
};

export default Card;
