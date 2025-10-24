import Input from "@/components/input";
import { useFormContext } from "react-hook-form";
import type { Schema } from "../../schema";
import Fieldset from "@/components/fieldset";
import data from "@/data.json";
import useGeoLocation from "@/hooks/useGetLocation";
import useGetCities from "@/hooks/useGetCities";
import { useEffect, useState } from "react";

const Form: React.FC = () => {
  const location = useGeoLocation();
  const { country_name, city } = location ?? {};
  const [countryName, setCountryName] = useState<string | undefined>();
  const [citiesForCountry, setCitiesForCountry] = useState<string[]>([]);

  useEffect(() => {
    setCountryName(country_name);
  }, [country_name]);

  const cities = useGetCities(countryName);
  const { register } = useFormContext<Schema>();

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryName(e.target.value);
  };

  useEffect(() => {
    setCitiesForCountry(cities);
  }, [countryName, cities]);

  return (
    <div className="grid grid-cols-2 gap-3 mt-5">
      <Fieldset.Root className="flex flex-col gap-2">
        <Fieldset.Label htmlFor="venue" className="md:text-base text-2xl">
          Venue name
        </Fieldset.Label>
        <Input
          type="text"
          className="p-3 border border-shark-200 shadow-sm"
          placeholder="Enter venue name"
          {...register("venue")}
        />
      </Fieldset.Root>
      <div></div>
      <Fieldset.Root className="flex flex-col col-span-2 gap-2">
        <Fieldset.Label htmlFor="address_1" className="md:text-base text-2xl">
          Address
        </Fieldset.Label>
        <Fieldset.Input
          type="text"
          className="p-3 border border-shark-200 shadow-sm"
          placeholder="Address"
          {...register("address")}
        />
      </Fieldset.Root>
      <Fieldset.Root className="flex flex-col gap-2">
        <Fieldset.Label htmlFor="city" className="md:text-base text-2xl">
          City
        </Fieldset.Label>
        <Fieldset.Select
          className="p-3 border border-shark-200 shadow-sm"
          {...register("city")}
          defaultValue={city}
        >
          {citiesForCountry.map((city, i) => (
            <option key={i} value={city}>
              {city}
            </option>
          ))}
        </Fieldset.Select>
      </Fieldset.Root>
      <Fieldset.Root className="flex flex-col gap-2">
        <Fieldset.Label htmlFor="state" className="md:text-base text-2xl">
          State/Province
        </Fieldset.Label>
        <Fieldset.Input
          type="text"
          className="p-3 border border-shark-200 shadow-sm"
          placeholder="e.g. Amsterdam"
          {...register("state")}
        />
      </Fieldset.Root>
      <Fieldset.Root className="flex flex-col gap-2">
        <Fieldset.Label htmlFor="postal_code" className="md:text-base text-2xl">
          Postal code
        </Fieldset.Label>
        <Fieldset.Input
          type="text"
          className="p-3 border border-shark-200 shadow-sm"
          placeholder="Postal code"
          {...register("postal_code")}
        />
      </Fieldset.Root>
      <Fieldset.Root className="flex flex-col gap-2">
        <Fieldset.Label htmlFor="country" className="md:text-base text-2xl">
          Country
        </Fieldset.Label>
        <Fieldset.Select
          {...register("country")}
          className="p-3 border border-shark-200 shadow-sm"
          defaultValue={country_name}
          onChange={handleCountryChange}
        >
          {Object.entries(data.countries).map(([code, info]) => (
            <option key={code} value={info.name} className="w-full py-3">
              {info.emoji} {info.name}
            </option>
          ))}
        </Fieldset.Select>
      </Fieldset.Root>
    </div>
  );
};

export default Form;
