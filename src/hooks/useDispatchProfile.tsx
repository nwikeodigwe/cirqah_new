import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import supabase from "@/supabase";
import { useDispatch } from "react-redux";
import { set_user } from "@/features/user/slice";
import type { Database } from "@/types/database.types";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

const useDispatchProfile = (session: Session | null) => {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    async function dispatchProfile() {
      if (!session?.user.id) return;
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .limit(1)
        .single();
      if (!error) {
        setProfile(data);
        dispatch(
          set_user({
            id: session.user.id,
            email: session.user.email,
            firstname: data.first_name,
            lastname: data.last_name,
            image: data.avatar_url,
            created_at: session.user.created_at,
            role: session.user.role,
            prefix: data.prefix,
            suffix: data.suffix,
            job_title: data.job_title,
            home_phone: data.home_phone,
            phone: session.user.phone,
            company: data.company,
            website: data.website,
            blog: data.blog,
            authenticated: true,
          })
        );
      }
    }

    dispatchProfile();
  });

  return profile;
};

export default useDispatchProfile;
