import { useFormContext } from "react-hook-form";
import type { Schema } from "./schema";
import clsx from "clsx";

const Attending = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Schema>();

  return (
    <div className="mt-3">
      <h3 className="text-lg font-medium">Attending Events</h3>
      <div className="mt-5">
        <ul className="space-y-3">
          <li>
            <label htmlFor="" className="flex items-start gap-3">
              <input type="checkbox" {...register("discover_events")} />
              <span className="-translate-y-[4px] text-sm text-chicago-600">
                Inspiration to help you discover events near you and updates on
                Eventbrite features
              </span>
            </label>
          </li>
          <li>
            <label
              htmlFor="friends_buy_ticket"
              className="flex items-start gap-3"
            >
              <input
                {...register("friends_buy_ticket")}
                type="checkbox"
                className={clsx({
                  "border border-red-500 bg-red-500/10":
                    errors.friends_buy_ticket,
                })}
              />
              <span className="-translate-y-[4px] text-sm text-chicago-600">
                When friends buy tickets or register for events near me
              </span>
            </label>
          </li>
          <li>
            <label
              className="flex items-start gap-3 "
              htmlFor="organizer_announce_event"
            >
              <input
                {...register("organizer_announce_event")}
                type="checkbox"
                className={clsx({
                  "border border-red-500 bg-red-500/10":
                    errors.organizer_announce_event,
                })}
              />
              <span className="-translate-y-[4px] text-sm text-chicago-600">
                When an organizer you follow announces a new event
              </span>
            </label>
          </li>
          <li>
            <label htmlFor="events_on_sale" className="flex items-start gap-3">
              <input
                {...register("events_on_sale")}
                type="checkbox"
                className={clsx({
                  "border border-red-500 bg-red-500/10": errors.events_on_sale,
                })}
              />
              <span className="-translate-y-[4px] text-sm text-chicago-600">
                Reminders about event onsales
              </span>
            </label>
          </li>
          <li>
            <label htmlFor="events_liked" className="flex items-start gap-3">
              {" "}
              <input
                {...register("events_liked")}
                type="checkbox"
                className={clsx({
                  "border border-red-500 bg-red-500/10": errors.events_liked,
                })}
              />
              <span className="-translate-y-[4px] text-sm text-chicago-600">
                Reminders about events I've liked
              </span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Attending;
