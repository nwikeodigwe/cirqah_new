import { useState, useEffect } from "react";
import type { Location } from "@/types/location.types";

const useGeoLocation = () => {
  const [location, setLocation] = useState<Location | undefined>(undefined);

  useEffect(() => {
    async function getGeoLocation() {
      const url = `${
        import.meta.env.VITE_SUPABASE_URL
      }/functions/v1/geo-location
`;
      const res = await fetch(url);
      const data: Location = await res.json();
      setLocation(data);
    }

    getGeoLocation();
  }, []);

  return location;
};

export default useGeoLocation;
