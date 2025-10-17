import { Link } from "react-router";
import Input from "@/components/input";

const Index = () => {
  return (
    <div className="container py-5 overflow-y-scroll h-[90vh]">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl">Delete Account</h3>
      </div>
      <hr className="text-chicago-200 mt-3" />
      <div className=" mt-5 text-sm text-chicago-800 ">
        <p>
          Thank you for using Eventbrite Events. If there is anything we can do
          to keep you with us, please <Link to="/contact">Let us know</Link>
        </p>
        <p className="mt-5">
          Please take a moment to let us know why you are leaving:
        </p>
        <ul className="space-y-3 mt-2">
          <li className="flex items-center gap-2">
            <input type="radio" name="reason" />
            <span>I chose a different solution</span>
          </li>
          <li className="flex items-center gap-2">
            <input type="radio" name="reason" />
            <span>The product is too difficult to use</span>
          </li>
          <li className="flex items-center gap-2">
            <input type="radio" name="reason" />
            <span>I do not host events</span>
          </li>
          <li className="flex items-center gap-2">
            <input type="radio" name="reason" />
            <span>The product lacks the necessary features</span>
          </li>
          <li className="flex items-center gap-2">
            <input type="radio" name="reason" />
            <span>The pricing is confusing</span>
          </li>
          <li className="flex items-center gap-2">
            <input type="radio" name="reason" />
            <span>The pricing is too high</span>
          </li>
          <li className="flex items-center gap-2">
            <input type="radio" name="reason" />
            <span>I do not recall signing up for Cirqah</span>
          </li>
          <li className="space-y-2">
            <div className="flex items-center gap-2">
              <input type="radio" name="reason" />
              <span>Other (Please explain)</span>
            </div>
            <Input className="border border-chicago-100 p-3 rounded-sm" />
          </li>
        </ul>
        <div className="flex flex-col gap-2 mt-5">
          <label htmlFor="close">Type "CLOSE"</label>
          <Input className="border border-chicago-100 p-3 rounded-sm" />
        </div>
        <button className="rounded-md py-3 px-10 shadow-md bg-red-600 text-white text-sm w-fit block mt-5 hover:scale-105 transition-all duration-150">
          Delete account
        </button>
      </div>
    </div>
  );
};

export default Index;
