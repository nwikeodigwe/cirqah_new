import { IoQrCode } from "react-icons/io5";
import type { Ticket } from "@/types/ticket.types";

interface Props {
  ticket: Ticket;
}
const Trigger = ({ ticket }: Props) => {
  return (
    <div className="relative shadow-md [clip-path:polygon(0 0, 0 0, 3% 65%, 0 100%, 0 100%, 97% 100%, 100% 65%, 97% 0)] rounded-md p-5 text-xs space-y-5 bg-chicago-20 overflow-hidden">
      <h3 className="text-sm font-medium">{ticket.event?.title}</h3>
      <div className="flex items-center justify-between text-chicago-500">
        <p>{ticket.event?.date + " " + ticket.event?.start_time}</p>
        <span>{ticket.event?.venue}</span>
      </div>
      <div className="flex items-center justify-between text-chicago-700">
        <p>{ticket.event?.city}</p>
        <span className="text-amber-600">{ticket.event?.amount}</span>
      </div>
      <div className="flex items-center justify-between border-t border-dashed border-chicago-500 pt-5">
        <div>
          <IoQrCode className="text-2xl" />
        </div>
        <div className="flex flex-col items-center">
          <h5>Section</h5>
          <p className="text-base">{ticket.section}</p>
        </div>
        <div className="flex flex-col items-center">
          <h5>Row</h5>
          <p className="text-base">{ticket.row}</p>
        </div>
        <div className="flex flex-col items-center">
          <h5>Seat</h5>
          <p className="text-base">{ticket.seat}</p>
        </div>
      </div>
    </div>
  );
};

export default Trigger;
