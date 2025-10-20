import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import { Dialog } from "radix-ui";
import Fieldset from "@/components/fieldset";
import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import supabase from "@/supabase";
import { useState } from "react";
import Email, { type Schema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

const Index = () => {
  const {email} = useSelector((state: RootState) => state.user)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isValid, isDirty, errors },
  } = useForm<Schema>({
    defaultValues: { email: "" },
    resolver: zodResolver(Email),
    mode: "onChange",
    reValidateMode: "onBlur",
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const disabled = isSubmitting || !isValid || !isDirty;

  const onSubmit = async (data: Schema) => {
    try {
      const result = await supabase.auth.updateUser({ email: data.email });
      console.log(result);
      setIsOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  const user = useSelector((state: RootState) => state.user);
  return (
    <div className="container py-5 overflow-y-scroll h-[90vh]">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl mb-5">Change Email</h3>
      </div>
      <hr className="text-chicago-200 mt-3" />
      <div className="space-y-1 mt-5">
        <h3 className="text-lg font-medium">Account Email Address</h3>
        <p className="font-medium text-sm text-chicago-500">{user.email}</p>
        <Dialog.Root open={isOpen}>
          <Dialog.Trigger
            onClick={() => setIsOpen((prev) => !prev)}
            className="hover:scale-105 transition-all duration-150 text-chicago-500 border-2 mt-2 border-chicago-500 rounded-sm py-2 px-10 text-sm active:scale-95"
            asChild
          >
            <button>Change</button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop:blur-lg z-20" />
            <Dialog.Content
              className="fixed top-1/2 left-1/2 -translate-1/2 bg-white w-[90vw] max-w-[600px] max-h-[85vh] rounded-sm shadow-md z-50 "
              aria-describedby="Change email content"
            >
              <div className="relative p-20">
                <Dialog.Close
                  onClick={() => setIsOpen(false)}
                  className="absolute top-5 right-5 hover:scale-105 active:scale-95"
                  asChild
                >
                  <button className="IconButton" aria-label="Close">
                    <IoMdClose className="text-2xl" />
                  </button>
                </Dialog.Close>
                <Dialog.Title aria-hidden className="sr-only">
                  Change your email address
                </Dialog.Title>
                <h3 className="text-3xl">Change your email address</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                  <Fieldset.Root>
                    <Fieldset.Label htmlFor="email">
                      Email Address
                    </Fieldset.Label>
                    <Fieldset.Input
                      {...register("email")}
                      className="p-3 rounded-sm border-chicago-200/50 bg-chicago-100/20"
                      defaultValue={email}
                    />
                    <Fieldset.Error>{errors.email?.message}</Fieldset.Error>
                  </Fieldset.Root>
                  <button
                    disabled={disabled}
                    className={clsx(
                      "relative py-3 mt-3 px-10 text-white enabled:bg-chicago-900 rounded-md shadow-md enabled:hover:scale-105 transition-all duration-150 disabled:bg-chicago-600 disabled:text-chicago-200 disabled:shadow-none disabled:cursor-not-allowed enabled:active:scale-95"
                    )}
                  >
                    {isSubmitting ? "Saving..." : "Save"}
                    <span
                      className={clsx("-translate-y-2 translate-x-2", {
                        "absolute top-1/2 right-1/2 w-5 h-5 border-4 border-chicago-100 border-t-transparent rounded-full animate-spin":
                          isSubmitting,
                      })}
                    ></span>
                  </button>
                </form>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  );
};

export default Index;
