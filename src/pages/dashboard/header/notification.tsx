import { IoIosNotificationsOutline } from "react-icons/io";
import { IoNotificationsOffOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DropdownMenu } from "radix-ui";
import supabase from "@/supabase";
import clsx from "clsx";

import type { Database } from "@/types/database.types";
import type { RootState } from "@/store";


type Ntfc = Database["public"]["Tables"]["notifications"]["Row"];

const Notification = () => {
  const user = useSelector((state: RootState) => state.user);
  const [notifications, setNotifications] = useState<Ntfc[] | null>(null);

  function getNotificationCount(notifications?: Ntfc[]) {
    if (!notifications) return 0;

    const count = notifications.length;

    if (count === 0) return 0;
    if (count >= 10) return "9+";

    return count;
  }

  useEffect(() => {
    async function getNofications() {
      try {
        if (!user.id) return;
        const { data, error } = await supabase
          .from("notifications")
          .select("*")
          .eq("user_id", user.id)
          .limit(10);
        if (!error) setNotifications(data);
      } catch (err) {
        console.error(err);
      }
    }

    getNofications();
  });
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="relative text-xl rounded-md bg-chicago-900 text-white p-2 shadow-md  hover:scale-105 outline-none border-none">
        <IoIosNotificationsOutline />
        <span
          className={clsx(
            "absolute flex flex-col size-4 items-center justify-center -top-1 -right-1 rounded-full bg-red-600 p-[1px] text-[8px]",
            !getNotificationCount() && "hidden"
          )}
        >
          {getNotificationCount()}
        </span>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="rounded-md w-[300px] bg-chicago-900 text-white text-sm mt-3 mr-3 z-30">
          <div
            className={clsx(
              "px-2 py-8 flex flex-col items-center justify-center space-y-2"
              //   cart.products.length && "hidden"
            )}
          >
            <IoNotificationsOffOutline className="text-2xl" />
            <p>You currently have no new notification</p>
          </div>
          {notifications?.map((notification, i) => (
            <DropdownMenu.Item
              key={i}
              className="px-3 py-1 outline-none hover:bg-chicago-950"
            >
              {notification.title}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Notification;
