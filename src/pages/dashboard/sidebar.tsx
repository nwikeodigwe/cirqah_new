import { Link, useLocation } from "react-router";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { LuTicketSlash } from "react-icons/lu";
import { CiStar } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";
import clsx from "clsx";
import { type ReactNode, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const links = [
  {
    label: "Dashboard",
    url: "/dashboard",
    icon: <MdOutlineDashboard className="text-2xl" />,
  },
  {
    label: "Browse Events",
    url: "/events",
    icon: <MdOutlineExplore className="text-2xl" />,
  },
  {
    label: "My Tickets",
    url: "/dashboard/tickets",
    icon: <LuTicketSlash className="text-2xl" />,
  },
  {
    label: "My Events",
    url: "/dashboard/events",
    icon: <CiStar className="text-2xl" />,
  },
  {
    label: "Settings",
    url: "/dashboard/settings",
    icon: <IoSettingsOutline className="text-2xl" />,
    sub: [
      {
        label: "Contact Info",
        url: "/dashboard/settings",
      },
      {
        label: "Change Email",
        url: "/dashboard/settings/email",
        icon: <IoSettingsOutline className="text-2xl" />,
      },
      {
        label: "Credit/Debit Card",
        url: "/dashboard/settings/payment",
      },
      {
        label: "Linked Accounts",
        url: "/dashboard/settings/accounts",
      },
      {
        label: "Preferences",
        url: "/dashboard/settings/preferences",
      },
      {
        label: "Personal Data",
        url: "/dashboard/settings/data",
      },
      {
        label: "Delete Account",
        url: "/dashboard/settings/delete",
      },
    ],
  },
];

type Sub = { label: string; url: string };

type Link = {
  label: string;
  url?: string;
  icon?: ReactNode;
  sub?: Sub[];
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (url: string) => {
    let active = false;
    active = location.pathname === url;
    if (url !== "/dashboard") active = location.pathname.startsWith(url);
    return active;
  };
  return (
    <div className="relative h-[96vh] col-span-3 border-r border-chicago-100 overflow-y-scroll">
      <div className="sticky top-0 flex items-center container bg-white z-10 py-5">
        <Link to="/">
          <h2 className="text-4xl">Cirqah</h2>
        </Link>
      </div>
      <div className="flex flex-col justify-between h-full pb-5 mt-5">
        <ul className="">
          {links.map((link, i) => (
            <li key={i}>
              <Link
                onClick={
                  link.sub ? () => setIsOpen((prev) => !prev) : undefined
                }
                to={!link.sub ? link.url : "#"}
                className={clsx(
                  "relative flex items-center gap-5 py-3 container hover:bg-chicago-100/20 transition-all duration-150",
                  {
                    "font-medium bg-chicago-100/20": isActive(link.url),
                  }
                )} >
                <span
                  className={clsx({
                    "text-white p-1 rounded-md bg-chicago-900": isActive(
                      link.url
                    ),
                  })}           >
                  {link.icon}
                </span>{" "}
                <span>{link.label}</span>
                {link.sub && (
                  <FaChevronRight
                    className={clsx(
                      "absolute top-1/2 -translate-y-2 right-3 text-chicago-300 transition-all duration-150",
                      { "rotate-90": isOpen }
                    )}
                  />
                )}
              </Link>
              <ul className={clsx("flex flex-col", { hidden: !isOpen })}>
                {link.sub?.map((sub, i) => (
                  <li key={i}>
                    <Link
                      onClick={(e) => e.stopPropagation()}
                      className={clsx(
                        "pl-16 block py-4 w-full  text-sm text-chicago-500 hover:bg-chicago-100/20 transition-all duration-150",
                        {
                          "bg-chicago-100/20 text-chicago-900":
                            location.pathname === sub.url,
                        }
                      )}
                      key={i}
                      to={sub.url}
                    >
                      {sub.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <ul>
          <li>
            <Link
              to="/help"
              className="flex items-center gap-5 py-3 container hover:bg-chicago-100/20 transition-all duration-150"
            >
              <RiCustomerService2Line className="text-2xl" />
              Help Center
            </Link>
          </li>
          <li>
            <Link
              to="/auth/logout"
              className="flex items-center gap-5 py-3 container hover:bg-chicago-100/20 transition-all duration-150"
            >
              <RiLogoutBoxLine className="text-2xl" /> Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
