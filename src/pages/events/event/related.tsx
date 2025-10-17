import Card from "../events/card";
import type { Database } from "@/types/database.types";

type Event = Database["public"]["Tables"]["events"]["Row"];

interface Props {
  data: Event[];
}

const Related = ({ data }: Props) => {
  return (
    <section className="mt-10 mx-auto">
      <div className="container px-5">
        <h2 className="text-2xl font-medium text-white-green">
          Related Events
        </h2>
        <div className="flex flex-row items-center space-x-3 overflow-scroll scrollbar-hide mt-5">
          {data.map((event, i) => (
            <Card key={i} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Related;
