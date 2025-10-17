import Fieldset from "@/components/fieldset";
import data from "@/data.json";
import { useFormContext } from "react-hook-form";
import type { Schema } from "../schema";

const Company = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Schema>();
  return (
    <div className="grid grid-cols-2 gap-5 mt-16">
      <h3 className="text-lg font-medium col-span-2">Company Address</h3>
      <Fieldset.Root className="col-span-2">
        <Fieldset.Label className="text-chicago-800" htmlFor="address">
          Address
        </Fieldset.Label>
        <Fieldset.Input
          {...register("company_address")}
          className="p-3 rounded-sm border-chicago-200/50 bg-chicago-100/20"
          placeholder=""
        />
        <Fieldset.Error>{errors.company_address?.message}</Fieldset.Error>
      </Fieldset.Root>
      <Fieldset.Root className="col-span-2">
        <Fieldset.Label className="text-chicago-800" htmlFor="firstname">
          Address 2
        </Fieldset.Label>
        <Fieldset.Input
          {...register("company_address_2")}
          className="p-3 rounded-sm border-chicago-200/50 bg-chicago-100/20"
          placeholder=""
        />
        <Fieldset.Error>{errors.company_address_2?.message}</Fieldset.Error>
      </Fieldset.Root>
      <Fieldset.Root className="col-span-2">
        <Fieldset.Label className="text-chicago-800" htmlFor="city">
          City
        </Fieldset.Label>
        <Fieldset.Input
          {...register("company_city")}
          className="p-3 rounded-sm border-chicago-200/50 bg-chicago-100/20"
          placeholder=""
        />
        <Fieldset.Error>{errors.company_city?.message}</Fieldset.Error>
      </Fieldset.Root>
      <Fieldset.Root className="col-span-2">
        <Fieldset.Label className="text-chicago-800" htmlFor="Lastname">
          country
        </Fieldset.Label>
        <Fieldset.Select
          {...register("company_country")}
          className="p-3 rounded-sm border-chicago-200/50 bg-chicago-100/20"
          defaultValue={data.countries.NL.name}
        >
          {Object.entries(data.countries).map(([code, info]) => (
            <option key={code} value={info.name} className="w-full py-3">
              {info.emoji} {info.name}
            </option>
          ))}
        </Fieldset.Select>
        <Fieldset.Error>{errors.company_country?.message}</Fieldset.Error>
      </Fieldset.Root>
      <Fieldset.Root>
        <Fieldset.Label className="text-chicago-800" htmlFor="postalcode">
          Postal Code
        </Fieldset.Label>
        <Fieldset.Input
          {...register("company_postal_code")}
          className="p-3 rounded-sm border-chicago-200/50 bg-chicago-100/20"
          placeholder=""
        />
        <Fieldset.Error>{errors.company_postal_code?.message}</Fieldset.Error>
      </Fieldset.Root>
      <Fieldset.Root>
        <Fieldset.Label className="text-chicago-800" htmlFor="state">
          State
        </Fieldset.Label>
        <Fieldset.Input
          {...register("company_state")}
          className="p-3 rounded-sm border-chicago-200/50 bg-chicago-100/20"
          placeholder=""
        />
        <Fieldset.Error>{errors.company_state?.message}</Fieldset.Error>
      </Fieldset.Root>
    </div>
  );
};

export default Company;
