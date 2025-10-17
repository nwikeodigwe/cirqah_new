import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import User, { type Login } from "./schema";
import { useDispatch } from "react-redux";
import Fieldset from "@/components/fieldset";
import Button from "@/components/button";
import supabase from "@/supabase";
import { useState } from "react";
import { set_auth } from "@/features/auth/slice";
import clsx from "clsx";
import Google from "./google";
import { Link } from "react-router";
import type { Auth } from "@/types/sanity.types";
import { motion } from "motion/react";
import { animate, variant } from "@/transition";

interface Props {
  data?: Auth;
}
const Form = ({ data }: Props) => {
  const dispatch = useDispatch();
  const [success, setSuccess] = useState("");

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isValid, isSubmitting, isDirty },
  } = useForm<Login>({
    defaultValues: { email: "" },
    resolver: zodResolver(User),
    mode: "onBlur",
  });

  const onSubmit = async (data: Login) => {
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: data.email,
        options: {
          shouldCreateUser: true,
          emailRedirectTo: import.meta.env.VITE_BASE_URL + "auth/callback",
        },
      });

      if (error)
        return setError("email", {
          type: "manual",
          message: "An unexpected error occured",
        });

      dispatch(set_auth(data));
      setSuccess("A verification email has been sent to you");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <motion.div variants={variant} className="space-y-7 mt-16">
      <motion.div
        variants={animate}
        className={clsx(
          "p-2 text-sm border border-green text-green bg-green/10 font-medium",
          !success && "hidden"
        )}
      >
        {success}
      </motion.div>
      <motion.form
        variants={animate}
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-7 items-center"
      >
        <Fieldset.Root>
          <Fieldset.Input
            {...register("email")}
            error={errors.email?.message}
            className="p-3 border border-chicago-100 shadow"
            placeholder={data?.placeholder}
          />
        </Fieldset.Root>
        <Button
          disabled={isSubmitting || !isDirty || !isValid}
          className="disabled:cursor-not-allowed disabled:bg-green/80 text-white-green text-center w-full py-3 shadow"
        >
          {data?.submit}
        </Button>
      </motion.form>
      <motion.div variants={animate} className="divider text-center">
        Or
      </motion.div>
      <Google text={data?.google} />
      <motion.p
        variants={animate}
        className="text-center text-xs text-chicago-600 mt-10"
      >
        By signing up, you’re joining a community that celebrates creators,
        empowers fans, and fuels culture. You agree to our{" "}
        <Link to="#" className="text-green">
          Terms
        </Link>{" "}
        and{" "}
        <Link to="#" className="text-green">
          Privacy Policy
        </Link>
        .
      </motion.p>
    </motion.div>
  );
};

export default Form;
