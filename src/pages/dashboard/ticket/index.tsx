import { Dialog } from "radix-ui";
import Content from "./content";
import Trigger from "./trigger";
import type { Ticket } from "@/types/ticket.types";

interface Props {
  ticket: Ticket;
}

const Index = ({ ticket }: Props) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="hover:scale:105 transition-all duration-150 active:scale-95">
        <Trigger ticket={ticket} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop:blur-lg z-20" />
        <Dialog.Content
          className="fixed flex flex-col justify-center items-center top-1/2 left-1/2 -translate-1/2 bg-white w-[65vw] max-w-[400px] max-h-[400px] h-[65vw] rounded-sm shadow-md z-50"
          aria-label="Event ticket"
        >
          <Dialog.Title aria-hidden className="sr-only">
            Event ticket for ---event
          </Dialog.Title>
          <Content code={ticket.code} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Index;
