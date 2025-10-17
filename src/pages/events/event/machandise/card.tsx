const Card = () => {
  return (
    <div className="flex flex-col">
      <div className="h-[280px] bg-chicago-500"></div>
      <div className="mt-4">
        <h2 className="text-white-green font-medium">Tommy hilfiger t-shirt</h2>
        <p className="text-sm text-chicago-500">description</p>
        <p className="flex gap-2 text-xs">
          <span className="line-through text-chicago-500">$230.00</span>
          <span className="text-red-500">$200.00</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
