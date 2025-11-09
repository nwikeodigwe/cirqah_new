import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router";
import type { Feature } from "./index";
import clsx from "clsx";

interface Props {
  feature: Feature;
}

const Events = ({ feature }: Props) => {
  return (
    <Link
      to={`/events/${feature?.event.id}`}
      className="relative flex-col items-start gap-2 p-2 shadow-sm rounded-md min-w-[250px] hover:scale-105 transition-all duration-150"
    >
      <div className={clsx("relative h-52 w-full bg-gradient-to-t from-black/70 to-transparent rounded-md, `bg-[url('${feature?.event.image_url}')] bg-cover bg-center")}>
        <button className="absolute bottom-3 right-3">
          <MdFavoriteBorder />
        </button>
      </div>
      <div className="text-sm flex flex-col py-4">
        <h4 className="md:font-normal font-semibold text-sm">
          {feature?.event.title}
        </h4>
        <p className="text-sm text-chicago-500">{feature?.event.venue}</p>
        <p className="text-xs text-yellow-500 font-light">
          {feature?.event.date}
        </p>
        <p className="w-fit border border-chicago-900 py-[2px] px-3 rounded-md text-xs mt-2">
          From €{feature?.event.amount}
        </p>
      </div>
    </Link>
  );
};

export default Events;
