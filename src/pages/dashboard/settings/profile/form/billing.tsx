import Fieldset from "@/components/fieldset";
import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import data from "@/data.json";
import type { Schema } from "../schema";
import { useFormContext } from "react-hook-form";

const Billing = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Schema>();
  const address = useSelector((state: RootState) => state.address);

  return (
    <div className="grid grid-cols-2 gap-5 mt-16">
      <h3 className="text-lg font-medium col-span-2">Billing Address</h3>
      <Fieldset.Root className="col-span-2">
        <Fieldset.Label className="text-chicago-800" htmlFor="address">
          Address
        </Fieldset.Label>
        <Fieldset.Input
          {...register("billing_address")}
          className="p-3 rounded-sm border-chicago-200/50 bg-chicago-100/20"
          placeholder=""
        />
        <Fieldset.Error>{errors.billing_address?.message}</Fieldset.Error>
      </Fieldset.Root>
      <Fieldset.Root className="col-span-2">
        <Fieldset.Label className="text-chicago-800" htmlFor="firstname">
          Address 2
        </Fieldset.Label>
        <Fieldset.Input
          {...register("billing_address_2")}
          className="p-3 rounded-sm border-chicago-200/50 bg-chicago-100/20"
          placeholder=""
        />
        <Fieldset.Error>{errors.billing_address_2?.message}</Fieldset.Error>
      </Fieldset.Root>
      <Fieldset.Root className="col-span-2">
        <Fieldset.Label className="text-chicago-800" htmlFor="city">
          City
        </Fieldset.Label>
        <Fieldset.Input
          {...register("billing_city")}
          className="p-3 rounded-sm border-chicago-200/50 bg-chicago-100/20"
          placeholder=""
        />
        <Fieldset.Error>{errors.billing_city?.message}</Fieldset.Error>
      </Fieldset.Root>
      <Fieldset.Root className="col-span-2">
        <Fieldset.Label className="text-chicago-800" htmlFor="Lastname">
          country
        </Fieldset.Label>
        <Fieldset.Select
          {...register("billing_country")}
          className="p-3 rounded-sm border-chicago-200/50 bg-chicago-100/20"
          defaultValue={address.billing_country ?? data.countries.NL.name}
        >
          htmlFor
        </Fieldset.Select>
        <Fieldset.Error>{errors.billing_country?.message}</Fieldset.Error>
      </Fieldset.Root>
      <Fieldset.Root>
        <Fieldset.Label className="text-chicago-800" htmlFor="postalcode">
          Postal Code
        </Fieldset.Label>
        <Fieldset.Input
          {...register("billing_postal_code")}
          className="p-3 rounded-sm border-chicago-200/50 bg-chicago-100/20"
          placeholder=""
        />
        <Fieldset.Error>{errors.billing_postal_code?.message}</Fieldset.Error>
      </Fieldset.Root>
      <Fieldset.Root>
        <Fieldset.Label className="text-chicago-800" htmlFor="state">
          State
        </Fieldset.Label>
        <Fieldset.Input
          {...register("billing_state")}
          className="p-3 rounded-sm border-chicago-200/50 bg-chicago-100/20"
          placeholder=""
        />
        <Fieldset.Error>{errors.billing_state?.message}</Fieldset.Error>
      </Fieldset.Root>
    </div>
  );
};

export default Billing;
