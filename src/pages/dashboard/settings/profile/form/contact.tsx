import Fieldset from "@/components/fieldset";
import data from "@/data.json";
import type { Schema } from "../schema";
import { useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

const prefixes = ["Mr", "Mrs", "Ms", "Mx", "Miss", "Dr", "Prof", "Rev"];

const Contact = () => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext<Schema>();

  const user = useSelector((state: RootState) => state.user);

  const handleHomePhoneNumberChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setValue("home_phone", `+${e.target.value}`);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue("phone", `+${e.target.value}`);
  };

  return (
    <div className="grid grid-cols-2 gap-5 mt-16">
      <h3 className="text-lg font-medium col-span-2">Contact Information</h3>
      <Fieldset.Root>
        <Fieldset.Label className="text-chicago-800" htmlFor="prefix">
          Prefix
        </Fieldset.Label>
        <Fieldset.Select
          {...register("prefix")}
          className="p-3 rounded-sm border-chicago-200/50 bg-chicago-100/20"
          defaultValue={user.prefix}
          aria-placeholder="Select prefix"
        >
          <option selected disabled>
            --Select prefix--
          </option>
          {prefixes.map((prefix, i) => (
            <option key={i} value={prefix.toUpperCase()} className="py-3">
              {prefix + "."}
            </option>
          ))}
        </Fieldset.Select>
        <Fieldset.Error>{errors.prefix?.message}</Fieldset.Error>
      </Fieldset.Root>
      <div></div>
      <Fieldset.Root>
        <Fieldset.Label className="text-chicago-800" htmlFor="first_name">
          First Name
        </Fieldset.Label>
        <Fieldset.Input
          {...register("first_name")}
          className="p-3 rounded-sm border-chicago-200/50 bg-chicago-100/20"
          placeholder="John"
        />
        <Fieldset.Error>{errors.first_name?.message}</Fieldset.Error>
      </Fieldset.Root>
      <Fieldset.Root>
        <Fieldset.Label className="text-chicago-800" htmlFor="last_name">
          Last Name
        </Fieldset.Label>
        <Fieldset.Input
          {...register("last_name")}
          className="p-3 rounded-sm border-chicago-200/50 bg-chicago-100/20"
          placeholder="Doe"
        />
        <Fieldset.Error>{errors.last_name?.message}</Fieldset.Error>
      </Fieldset.Root>
      <Fieldset.Root>
        <Fieldset.Label className="text-chicago-800" htmlFor="suffix">
          Suffix
        </Fieldset.Label>
        <Fieldset.Input
          {...register("suffix")}
          className="p-3 rounded-sm border-chicago-200/50 bg-chicago-100/20"
          placeholder=""
          defaultValue={user.suffix}
        />
        <Fieldset.Error>{errors.suffix?.message}</Fieldset.Error>
      </Fieldset.Root>
      <div></div>
      <Fieldset.Root>
        <Fieldset.Label
          className="col-span-12 text-chicago-800"
          htmlFor="home_phone"
        >
          Home phone
        </Fieldset.Label>
        <div className="flex gap-2">
          <select
            onChange={handleHomePhoneNumberChange}
            className="col-span-3  w-[55px] border py-3 px-3 rounded-sm border-chicago-200/50 bg-chicago-100/20"
            defaultValue={data.countries.NL.phone}
          >
            {Object.entries(data.countries).map(([code, info]) => (
              <option key={code} value={info.phone} className="text-sm">
                {info.emoji + " " + code}
              </option>
            ))}
          </select>
          <div className="w-[255px]">
            <Fieldset.Input
              {...register("home_phone")}
              className="col-span-9  p-3 rounded-sm border-chicago-200/50 bg-chicago-100/20"
              placeholder=""
            />
            <Fieldset.Error>{errors.home_phone?.message}</Fieldset.Error>
          </div>
        </div>
      </Fieldset.Root>

      <Fieldset.Root>
        <Fieldset.Label className="text-chicago-800" htmlFor="phone">
          Cell phone
        </Fieldset.Label>
        <div className="flex gap-2">
          <select
            onChange={handlePhoneNumberChange}
            className="col-span-3  w-[55px] border py-3 px-3 rounded-sm border-chicago-200/50 bg-chicago-100/20"
            defaultValue={data.countries.NL.phone}
          >
            {Object.entries(data.countries).map(([code, info]) => (
              <option key={code} value={info.phone} className="text-sm">
                {info.emoji + " " + code}
              </option>
            ))}
          </select>
          <div className="w-[255px]">
            <Fieldset.Input
              {...register("phone")}
              className="col-span-9  p-3 rounded-sm border-chicago-200/50 bg-chicago-100/20"
              placeholder=""
            />
            <Fieldset.Error>{errors.phone?.message}</Fieldset.Error>
          </div>
        </div>
      </Fieldset.Root>
      <Fieldset.Root>
        <Fieldset.Label className="text-chicago-800" htmlFor="job_title">
          Job Title
        </Fieldset.Label>
        <Fieldset.Input
          {...register("job_title")}
          className="p-3 rounded-sm border-chicago-200/50 bg-chicago-100/20"
          placeholder=""
        />
        <Fieldset.Error>{errors.job_title?.message}</Fieldset.Error>
      </Fieldset.Root>
      <Fieldset.Root>
        <Fieldset.Label className="text-chicago-800" htmlFor="company">
          Company / Organization
        </Fieldset.Label>
        <Fieldset.Input
          {...register("company")}
          className="p-3 rounded-sm border-chicago-200/50 bg-chicago-100/20"
          placeholder=""
        />
        <Fieldset.Error>{errors.company?.message}</Fieldset.Error>
      </Fieldset.Root>
      <Fieldset.Root>
        <Fieldset.Label className="text-chicago-800" htmlFor="website">
          Wesite
        </Fieldset.Label>
        <Fieldset.Input
          {...register("website")}
          className="p-3 rounded-sm border-chicago-200/50 bg-chicago-100/20"
          placeholder=""
        />
        <Fieldset.Error>{errors.website?.message}</Fieldset.Error>
      </Fieldset.Root>
      <Fieldset.Root>
        <Fieldset.Label className="text-chicago-800" htmlFor="blog">
          blog
        </Fieldset.Label>
        <Fieldset.Input
          {...register("blog")}
          className="p-3 rounded-sm border-chicago-200/50 bg-chicago-100/20"
          placeholder=""
        />
        <Fieldset.Error>{errors.blog?.message}</Fieldset.Error>
      </Fieldset.Root>
    </div>
  );
};

export default Contact;
