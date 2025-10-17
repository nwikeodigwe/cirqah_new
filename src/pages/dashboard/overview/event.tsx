import type { Database } from "@/types/database.types";

interface Props {
  event: Database["public"]["Tables"]["events"]["Row"];
}
const Event = ({ event }: Props) => {
  return (
    <div className="col-span-7 bg-chicago-100/20 rounded-md shadow-md  transition-all duration-150">
      <div className="h-[210px] bg-chicago-300 rounded-md"></div>
      <div className="flex items-center justify-between px-2 py-2">
        <div className="space-y-1">
          <h4 className="text-sm font-medium">{event.title}.</h4>
          <p className="text-xs text-chicago-900">{event.venue}</p>
          <p className="text-xs font-light">{event.date}</p>
        </div>
        <div className="flex flex-col justify-between h-full gap-4">
          <p className="text-xs text-chicago-900">
            Starts from ${event.amount}
          </p>
          <button className="text-sm rounded-md px-4 py-1 bg-chicago-900 text-white shadow-md">
            Buy ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
