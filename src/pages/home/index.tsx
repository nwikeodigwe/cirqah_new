import Event from "./event";
import { MdOutlinePlayCircle } from "react-icons/md";

const Index = () => {
  return (
    <div className="min-h-screen bg-[url('./assets/home/image-mobile.png')] md:bg-[url('./assets/home/image-desktop.png')] lg:bg-[url('./assets/home/image-desktop.png')] bg-cover bg-center bg-fixed container relative flex flex-col justify-end items-end p-5 md:p-5">
      <button className="flex items-center justify-between gap-2 py-3 px-7 bg-white-green place-content-center top-1/2 right-1/2 absolute translate-x-1/2 -translate-1/2 shadow">
        <MdOutlinePlayCircle className="text-2xl" />
        <span>Watch</span>
      </button>
      <Event />
    </div>
  );
};

export default Index;
