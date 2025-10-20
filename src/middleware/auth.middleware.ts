import { redirect } from "react-router";
import supabase from "@/supabase";

const Auth = async () => {
  const { data } = await supabase.auth.getSession();
  if (!data.session) throw redirect("/");
};

export default Auth;
