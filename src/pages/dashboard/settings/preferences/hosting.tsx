import { useFormContext } from "react-hook-form";
import type { Schema } from "./schema";
import clsx from "clsx";

const Hosting = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Schema>();
  return (
    <div className="mt-10">
      <h3 className="text-lg font-medium">Hosting Events</h3>
      <div className="mt-5">
        <ul className="space-y-3">
          <li>
            <label htmlFor="feature_update" className="flex items-start gap-3">
              <input
                {...register("feature_update")}
                type="checkbox"
                className={clsx({
                  "border border-red-500 bg-red-500/10": errors.feature_update,
                })}
              />
              <span className="-translate-y-[4px] text-sm text-chicago-600">
                Important event information, feature updates, tips, trends, and
                offers
              </span>
            </label>
          </li>
          <li>
            <label
              htmlFor="event_sale_recap"
              className="flex items-start gap-3"
            >
              <input
                {...register("event_sales_recap")}
                type="checkbox"
                className={clsx({
                  "border border-red-500 bg-red-500/10":
                    errors.event_sales_recap,
                })}
              />
              <span className="-translate-y-[4px] text-sm text-chicago-600">
                Event sales recap
              </span>
            </label>
          </li>
          <li>
            <label
              htmlFor="reminder_for_next_event"
              className="flex items-start gap-3"
            >
              <input
                {...register("reminder_for_next_event")}
                type="checkbox"
                className={clsx({
                  "border border-red-500 bg-red-500/10":
                    errors.reminder_for_next_event,
                })}
              />
              <span className="-translate-y-[4px] text-sm text-chicago-600">
                Important reminders for my next event
              </span>
            </label>
          </li>
          <li>
            <label
              htmlFor="confirmation_from_attendies"
              className="flex items-start gap-3"
            >
              <input
                {...register("confirmation_from_attendies")}
                type="checkbox"
                className={clsx({
                  "border border-red-500 bg-red-500/10":
                    errors.confirmation_from_attendies,
                })}
              />
              <span className="-translate-y-[4px] text-sm text-chicago-600">
                Order confirmations from my attendees
              </span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hosting;
