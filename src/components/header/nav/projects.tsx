import { FaAngleDown } from "react-icons/fa6";
import { DropdownMenu } from "radix-ui";
import { Link } from "react-router";
import { useState } from "react";
import type { Links } from "./index";
import clsx from "clsx";

interface Props {
  data: Links;
}

const Projects = ({ data }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu.Root onOpenChange={() => setOpen((prev) => !prev)}>
      <DropdownMenu.Trigger className="flex items-center gap-2 active:outline-none active:border-none border-none">
        <Link to="">{data.label}</Link>
        <FaAngleDown
          className={clsx("transition duration-150", open && "-rotate-90")}
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-chicago-900/70 py-5 px-3 space-y-2 text-white-green ">
          {data.children?.map((link, i) => (
            <DropdownMenu.Item key={i}>
              <Link to={`${link.url}`} className="py-3">
                {link.label}
              </Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Projects;
