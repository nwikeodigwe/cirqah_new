import { Link } from "react-router";
import { SiEventstore } from "react-icons/si";
import { FaCloudUploadAlt } from "react-icons/fa";
import { CiMoneyCheck1 } from "react-icons/ci";
import { VscOpenPreview } from "react-icons/vsc";

const options = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
        <Link to="/events/create" className="flex flex-col justify-center h-30 my-10 shadow-sm p-2 bg-gradient-to-tr from-black/70 to-red-500/20 text-white space-y-2">
            <span><SiEventstore className="text-4xl" /></span>
            <h2 className="font-bold">Create Event</h2>
        </Link>
        <Link to="upload" className="flex flex-col justify-center h-30 my-10 shadow-sm p-2 bg-gradient-to-tr from-black/70 to-green-500/20 space-y-2">
            <span><FaCloudUploadAlt className="text-4xl"/></span>
            <h2 className="font-bold">Upload Photo Content</h2>
        </Link>
        <Link to="#" className="flex flex-col justify-center h-30 my-10 shadow-sm p-2 bg-gradient-to-tr from-black/70 to-blue-500/20 space-y-2">
            <span><CiMoneyCheck1 className="text-4xl" />
            </span>
            <h2 className="font-bold">Set Monitization</h2>       
        </Link>
        <Link to="#" className="flex flex-col justify-center h-30 my-10 shadow-sm p-2 bg-gradient-to-tr from-black/70 to-yellow-500/20 space-y-2"><span><VscOpenPreview className="text-4xl" />
            </span>
            <h2 className="font-bold">Preview in Cirqah</h2>
        </Link>
    </div>
  )
}

export default options