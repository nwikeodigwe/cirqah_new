import { Link } from "react-router";

const Plan = () => {
  return (
    <div className="p-5 space-y-5 bg-chicago-50 rounded-md shadow-md">
      <h3 className="text-2xl font-medium">Plan, Create, Celebrate</h3>
      <p className="text-sm w-[50ch]">
        It's time to celebrate your creativity. Let's make memories together -
        start planning now
      </p>
      <Link
        to="/event/create"
        className="px-4 py-2 bg-chicago-900 rounded-md shadow-md text-white text-sm hover:scale-105 active:scale-95 transition-all duration-150 inline-block"
      >
        Create your event
      </Link>
    </div>
  );
};

export default Plan;
