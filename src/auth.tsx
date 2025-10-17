import { useEffect, useState } from "react";
import type { AuthChangeEvent, Session } from "@supabase/supabase-js";
import { AuthContext as Context } from "@/context/auth";
import supabase from "@/supabase";
import { useDispatch } from "react-redux";
import useDispatchAddress from "@/hooks/useDispatchAddress";
import useDispatchProfile from "@/hooks/useDispatchProfile";
import useDispatchPreferences from "@/hooks/useDispatchPreferences";

export const Auth = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const address = useDispatchAddress(session);
  const profile = useDispatchProfile(session);
  const preferences = useDispatchPreferences(session);

  useEffect(() => {
    const init = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        if (session) setSession(session);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    init();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event: AuthChangeEvent, newSession: Session | null) => {
        setSession(newSession);
      }
    );

    return () => subscription.unsubscribe();
  }, [dispatch]);

  const value = {
    session,
    user: session?.user,
    isAuthenticated: !!session,
    isLoading: loading,
    address: address,
    profile: profile,
    preferences: preferences,
  };

  return (
    <Context.Provider value={value}>{!loading && children}</Context.Provider>
  );
};
