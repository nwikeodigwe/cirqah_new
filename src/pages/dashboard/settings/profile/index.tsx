import { type DefaultValues, FormProvider, useForm } from "react-hook-form";
import Contact from "./form/contact";
import Picture from "./form/picture";
import Home from "./form/home";
import Billing from "./form/billing";
import Shipping from "./form/shipping";
import Company from "./form/company";
import Save from "./form/save";
import Prf, { type Schema } from "./schema";
import { useSelector } from "react-redux";
import supabase from "@/supabase";
import { file } from "@/services/File";
import type { RootState } from "@/store";
import { createSelector } from "@reduxjs/toolkit";
import { zodResolver } from "@hookform/resolvers/zod";

type AddressEnum = "home" | "billing" | "shipping" | "company";

type Prefix =
  | "MR"
  | "MRS"
  | "MS"
  | "MX"
  | "MISS"
  | "DR"
  | "REV"
  | "PROF"
  | undefined;

const Profile = () => {
  const selectUser = (state: RootState) => state.user;
  const selectAddress = (state: RootState) => state.address;

  const selectUserAndAddress = createSelector(
    [selectUser, selectAddress],
    (
      user,
      address
    ): { user: RootState["user"]; address: RootState["address"] } => ({
      user,
      address,
    })
  );

  const { user, address } = useSelector(selectUserAndAddress);

  const defaultValues: DefaultValues<Schema> = {
    image: undefined,
    prefix: user.prefix as Prefix,
    first_name: user.firstname,
    last_name: user.lastname,
    suffix: user.suffix,
    home_phone: user.home_phone,
    phone: user.phone,
    job_title: user.job_title,
    company: user.company,
    website: user.website,
    blog: user.blog,
    ...(["home", "billing", "shipping", "company"] as AddressEnum[]).reduce(
      (acc, type) => {
        acc[`${type}_address`] = address[`${type}_address`] || "";
        acc[`${type}_address_2`] = address[`${type}_address_2`] || "";
        acc[`${type}_city`] = address[`${type}_city`] || "";
        acc[`${type}_state`] = address[`${type}_state`] || "";
        acc[`${type}_country`] = address[`${type}_country`] || "";
        acc[`${type}_postal_code`] = address[`${type}_postal_code`] || "";
        return acc;
      },
      {} as Record<string, string>
    ),
  };

  const methods = useForm<Schema>({
    defaultValues,
    resolver: zodResolver(Prf),
    mode: "onChange",
    reValidateMode: "onBlur",
  });

  const onSubmit = async (data: Schema) => {
    console.log(data.phone);
    try {
      if (user.id) {
        let avatar_url = null;
        if (data.image) {
          file.payload = data.image;
          avatar_url = await file.upload();
          console.log(avatar_url);
        }

        const result = await Promise.all([
          supabase.auth.updateUser({
            phone: data.phone,
          }),

          supabase
            .from("profiles")
            .update({
              first_name: data.first_name,
              last_name: data.last_name,
              prefix: data.prefix,
              suffix: data.suffix,
              home_phone: data.home_phone,
              job_title: data.job_title,
              company: data.company,
              website: data.website,
              blog: data.blog,
              ...(avatar_url && { avatar_url }),
            })
            .eq("id", user.id),
          supabase.from("address").upsert(
            {
              user_id: user.id,
              postal_code: data.home_postal_code,
              country: data.home_country,
              state: data.home_state,
              city: data.home_city,
              address: data.home_address,
              address_2: data.home_address_2,
              type: "HOME",
            },
            { onConflict: "user_id, type" }
          ),
          supabase.from("address").upsert(
            {
              user_id: user.id,
              postal_code: data.shipping_postal_code,
              country: data.shipping_country,
              state: data.shipping_state,
              city: data.shipping_city,
              address: data.shipping_address,
              address_2: data.shipping_address_2,
              type: "SHIPPING",
            },
            { onConflict: "user_id, type" }
          ),
          supabase.from("address").upsert(
            {
              user_id: user.id,
              postal_code: data.billing_postal_code,
              country: data.billing_country,
              state: data.billing_state,
              city: data.billing_city,
              address: data.billing_address,
              address_2: data.billing_address_2,
              type: "BILLING",
            },
            { onConflict: "user_id, type" }
          ),
          supabase.from("address").upsert(
            {
              user_id: user.id,
              postal_code: data.company_postal_code,
              country: data.company_country,
              state: data.company_state,
              city: data.company_city,
              address: data.company_address,
              address_2: data.company_address_2,
              type: "COMPANY",
            },
            { onConflict: "user_id, type" }
          ),
        ]);
        console.log(result);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="mt-5 space-y-5"
      >
        <Picture />
        <Contact />
        <Home />
        <Billing />
        <Shipping />
        <Company />
        <Save />
      </form>
    </FormProvider>
  );
};

export default Profile;
