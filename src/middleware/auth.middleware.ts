import supabase from "@/supabase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Auth = () => {
  const [isAuth, setAuth] = useState<boolean>(false);
  useEffect(() => {
    const auth = async () => {
      const { data } = await supabase.auth.getSession();
      setAuth(!!data.session);
    };

    auth();
  });

  const navigate = useNavigate();

  if (!isAuth === false) return navigate("/");
};

export default Auth;
