import supabase from "@/supabase";
import { FcGoogle } from "react-icons/fc";

const Google = ({ text }: { text?: string }) => {
  const login = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) return;
  };
  return (
    <>
      <button
        onClick={login}
        className="flex items-center gap-5 justify-center text-chicago-700 px-4 py-3 w-full border border-chicago-100  shadow relative"
      >
        <FcGoogle className="text-2xl absolute top-1/2 left-5 -translate-y-1/2" />
        <span>{text}</span>
      </button>
    </>
  );
};

export default Google;
