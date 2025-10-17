import clsx from "clsx";

interface Props {
  count: number | null;
  desc: string;
}

const Stat = ({ count, desc }: Props) => {
  return (
    <div className={clsx("shadow-md p-5 rounded-md bg-chicago-900")}>
      <h3 className="text-2xl text-chicago-50 font-medium">{count}</h3>
      <p className="text-sm text-chicago-100">{desc}</p>
    </div>
  );
};

export default Stat;
