import Event from "./event";
import supabase from "@/supabase";
import Glide from "@glidejs/glide";
import { useEffect, useState } from "react";
import useGeoLocation from "@/hooks/useGetLocation";
import type { Database } from "@/types/database.types";

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
        <div className="h-[300px] glide">
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
      </div>
  );
};

export default Index;
