import useGetEvents from "@/hooks/useGetEvents";
import { Link } from "react-router";

const Event = () => {
  const events = useGetEvents();
  const random = Math.floor(Math.random() * events.length);
  const event = events[random];
  return (
    <div className="bg-white-green p-5 w-full md:max-w-[550px] md:justify-self-end shadow ">
      <div className="flex gap-3">
        <div
          className={`shadow size-28 bg-chicago-100 col-span-1 bg-[url(${event?.image_url})]`}
        ></div>
        <div className="flex flex-col flex-1 justify-between col-span-2">
          <p className="text-[12px] text-chicago-500">{event?.venue}</p>
          <div>
            <p className="text-md font-medium text-chicago-600">
              {event?.title}
            </p>
            <p className="text-xs text-chicago-500">{event?.date}</p>
            <div className="flex gap-1">
              <Link
                to={`/events/${event?.slug}`}
                className="py-3 bg-green text-white-green text-sm shadow text-[12px] w-fit px-10 mt-2"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
