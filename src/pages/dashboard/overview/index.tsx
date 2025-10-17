import { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import Event from "./event";
import Stat from "./stat";
import type { Database } from "@/types/database.types";
import supabase from "@/supabase";
import useGeoLocation from "@/hooks/useGetLocation";

type Events = Database["public"]["Tables"]["events"]["Row"];

const Index = () => {
  const [events, setEvents] = useState<Events[] | null>();
  const [country, setCountry] = useState<string | undefined>();
  // const [cities, setCities] = useState();
  const location = useGeoLocation();

  useEffect(() => {
    setCountry(location?.country_name);
  }, [location]);

  useEffect(() => {
    async function getEvents() {
      try {
        const { data, error } = await supabase.rpc("get_top_cities_events", {
          country_input: country ?? "Netherlands",
        });

        if (!error) {
          setEvents(data);
        }
      } catch (err) {
        console.error(err);
      }
    }
    getEvents();
  }, [country]);

  // useEffect(() => {
  //   async function getCities() {
  //     try {
  //       const { data, error } = await supabase.rpc(
  //         "get_events_from_top_cities",
  //         {
  //           country_input: location?.country_name,
  //         }
  //       );

  //       if (!error) setCities(data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }

  //   getCities();
  // });

  useEffect(() => {
    if (events?.length)
      new Glide(".glide", {
        type: "carousel",
        perView: 1,
        focusAt: "center",
        autoplay: 5000,
      }).mount();
  }, [events]);

  return (
    <div>
      <div className="grid grid-cols-13 mt-5 gap-5">
        <div className="col-span-7 glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {events?.map((evn, i) => (
                <li key={i} className="glide__slide">
                  <Event event={evn} />
                </li>
              ))}
            </ul>
          </div>
          <div
            className="glide__bullets translate-y-12"
            data-glide-el="controls[nav]"
          >
            {events?.map((_, i) => (
              <button
                key={i}
                className="glide__bullet"
                data-glide-dir={`=${i}`}
              />
            ))}
          </div>
        </div>
        <div className="col-span-6 flex flex-col gap-1 space-y-4">
          <Stat />
          <Stat />
          <Stat />
        </div>
      </div>
    </div>
  );
};

export default Index;
