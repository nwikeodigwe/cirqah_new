import type { RootState } from "@/store";
import clsx from "clsx";
import { useSelector } from "react-redux";

const Picture = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <div
      className={clsx(
        "size-36 rounded-full overflow-clip border border-chicago-200 mx-auto bg-cover bg-center"
      )}
      style={{ backgroundImage: `url('${user.image}')` }}
    ></div>
  );
};

export default Picture;
