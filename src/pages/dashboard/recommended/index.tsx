import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Event from "./events";
import type { Database } from "@/types/database.types";
import supabase from "@/supabase";

import "swiper/swiper-bundle.css";
import clsx from "clsx";

export type Feature =
  | Database["public"]["Tables"]["featured_events"]["Row"] & {
      event: Database["public"]["Tables"]["events"]["Row"];
    };

const Index = () => {
  const [features, setFeatures] = useState<Feature[] | null>(null);

  useEffect(() => {
    async function getFeaturedEvents() {
      try {
        const { data, error } = await supabase
          .from("featured_events")
          .select(`*,event:events (*)`)
          .limit(10);

        if (!error) {
          const validEvents = data.filter(
            (item): item is Feature => item.event !== null
          );
          setFeatures(validEvents);
        }
      } catch (err) {
        console.error(err);
      }
    }

    getFeaturedEvents();
  });
  return (
    <div className={clsx("mt-10", !features?.length && "hidden")}>
      <h3 className="text-xl mb-2">Featured Events</h3>
      <hr className="text-chicago-300 mb-5" />
      <Swiper
        modules={[Autoplay]}
        loop={true}
        loopAdditionalSlides={2}
        speed={10000}
        direction="horizontal"
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        freeMode={true}
        allowTouchMove={false}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 6,
            spaceBetween: 25,
          },
        }}
        className="event-slider max-w-full flex gap-2"
      >
        {features?.map((feature, i) => (
          <SwiperSlide key={i}>
            <Event feature={feature} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex overflow-x-scroll items-center gap-3 h-[calc(100% + 10px)] py-2"></div>
    </div>
  );
};

export default Index;
