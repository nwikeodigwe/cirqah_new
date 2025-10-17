import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const handleSubtract = () => {
    if (count < 1) return;
    setCount((prev) => prev - 1);
  };

  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="flex items-center text-white-green/50">
      <button
        onClick={handleSubtract}
        className="size-7 border border-chicago-800 shadow"
      >
        -
      </button>
      <span className="flex items-center justify-center h-7 min-w-7 border border-chicago-800 shadow">
        {count}
      </span>
      <button
        onClick={handleAdd}
        className="size-7 border border-chicago-800 shadow"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
