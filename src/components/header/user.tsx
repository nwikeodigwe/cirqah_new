import Notification from "@/pages/dashboard/header/notification";
import Cart from "@/pages/dashboard/header/cart";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { client } from "@/sanity";
import { DropdownMenu } from "radix-ui";
import { CiUser } from "react-icons/ci";
import supabase from "@/supabase";

const User = () => {
  const [cta, setCta] = useState();
  const [auth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    async function getCta() {
      const data = await client.fetch(`*[_type == "nav"][0]{navButton}`);
      setCta(data.navButton);
    }

    getCta();
  });

  useEffect(() => {
    async function getAuth() {
      const { data } = await supabase.auth.getSession();
      if (data.session) setAuth(true);
    }

    getAuth();
  });

  console.log(auth);

  return (
    <div className="flex gap-3 items-center">
      {!auth ? (
        <Link
          to="/auth"
          className="bg-green-500 px-5 py-2 text-white shadow hover:bg-green-600"
        >
          {cta}
        </Link>
      ) : (
        <ul className="flex gap-3 items-center">
          <li>
            <Cart />
          </li>
          <li>
            <Notification />
          </li>
          <li>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="text-xl rounded-md bg-chicago-900 text-white p-2 shadow-md hover:scale-105 outline-none">
                <CiUser />
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content className="bg-chicago-900/70 py-5 px-3 space-y-2 text-white-green ">
                  <DropdownMenu.Item>
                    <Link to="/dashboard">Dashboard</Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <Link to="/auth/logout">Logout</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </li>
        </ul>
      )}
    </div>
  );
};

export default User;
