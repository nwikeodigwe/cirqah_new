import { resetAllState } from "@/utils/stateUtils";
import { useNavigate } from "react-router";
import type { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import supabase from "@/supabase";


const Logout = () => {
  const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();  

  useEffect(() => {
    const  logout = async () => {
    const { error } = await supabase.auth.signOut();
        if (error) {
        throw error;
        }
    }

    resetAllState(dispatch)
    logout()
    navigate("/")
  }, [navigate, dispatch]);

  return <div>Logging out...</div>;
};

export default Logout;
