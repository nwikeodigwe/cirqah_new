import { useEffect, useState } from "react";

const useGetCities = (country: string | undefined) => {
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    async function getCities() {
      try {
        const url = "https://countriesnow.space/api/v0.1/countries/cities";
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            country: country,
          }),
        });

        const { data, error } = await res.json();
        if (!error) setCities(data);
      } catch (err) {
        console.error(err);
      }
    }

    getCities();
  }, [country]);

  return cities;
};

export default useGetCities;
