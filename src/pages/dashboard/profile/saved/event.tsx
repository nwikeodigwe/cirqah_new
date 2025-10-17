import { Link } from "react-router";
import type { Favorite } from ".";

interface Props {
  favorite: Favorite;
}
const Event = ({ favorite }: Props) => {
  return (
    <div className="flex item-center justify-between shadow-md rounded-md text-xs p-3">
      <div className="flex items-center gap-3">
        <div className="size-14 bg-chicago-300 rounded-md"></div>
        <div className="flex flex-col justify-between">
          <h3 className="text-sm">{favorite.event?.title}</h3>
          <p className="text-chicago-700">{favorite.event?.summary}</p>
          <p className="text-chicago-500">{favorite.event?.date}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center">
        <Link
          to="/events/buy"
          className="hover:scale-105 transition-all duration-150 active:scale-95 bg-chicago-900 text-white rounded-md py-[2px] px-3 shadow-md"
        >
          Buy
        </Link>
        <span className="text-chicago-900">${favorite.event?.amount}</span>
      </div>
    </div>
  );
};

export default Event;
