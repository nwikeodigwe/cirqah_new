const Stat = () => {
  return (
    <div className="flex item-center gap-3 border border-chicago-100/20 rounded-md shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer">
      <div className="bg-chicago-300 rounded-md size-20"></div>
      <div className="flex flex-col justify-center">
        <h4 className="text-sm font-medium">New York, US</h4>
        <p className="text-xs text-chicago-500">1,300 Events</p>
      </div>
    </div>
  );
};

export default Stat;
