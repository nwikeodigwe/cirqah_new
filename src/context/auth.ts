import type { Session } from "@supabase/supabase-js";
import { createContext } from "react";

export interface AuthContextType {
  session: Session | null;
  user: Session["user"] | undefined;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);
