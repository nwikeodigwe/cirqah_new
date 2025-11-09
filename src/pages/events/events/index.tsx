import clsx from "clsx";
import Card from "./card";
import supabase from "@/supabase";
import DatePicker from "react-datepicker";
import Fieldset from "@/components/fieldset";
import { GrChatOption } from "react-icons/gr";
import { MdAttachMoney } from "react-icons/md";
import { GiMusicalNotes } from "react-icons/gi";
import useGetCities from "@/hooks/useGetCities";
import { PiTelevisionBold } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import useGeoLocation from "@/hooks/useGetLocation";
import type { Database } from "@/types/database.types";
import { Slider, DropdownMenu, Checkbox } from "radix-ui";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";


import "react-datepicker/dist/react-datepicker.css";

export type Event = "GIG" | "TALK" | "SOCIAL";
type EventsForCity = Database["public"]["Tables"]["events"]["Row"];

const Index = () => {
  const location = useGeoLocation();
  const [country, setCountry] = useState<string | undefined>("Netherlands");
  const [city, setCity] = useState<string | undefined>("Amsterdam");
  const cities = useGetCities(country);

  console.log(city);

  useEffect(() => {
    setCountry(location?.country_name);
    setCity(location?.city);
  }, [location]);

  const [events, setEvents] = useState<EventsForCity[] | []>([]);
  //   const [relatedEvents, setRelatedEvents] = useState<EventsForCity[] | []>([]);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  // const context = useContext(EventContext);
  const [selectedCity, setSelectedCity] = useState<string | undefined>();

  useEffect(() => {
    setSelectedCity(city);
  }, [city]);

  const [selectedPrice, setSelectedPrice] = useState<number[] | undefined>();

  const [selectedDate, setSelectedDate] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;

    if (start && end && start.getTime() === end.getTime()) {
      setSelectedDate([null, null]);
    } else {
      setSelectedDate([start, end]);
    }
  };

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    // if (context) context.dispatch({ type: "set_city", payload: city });
    setIsOpen(false);
  };

  function formatDateRange(startDate?: Date | null, endDate?: Date | null) {
    if (!startDate) return "Date";
    const options = {
      month: "short",
      day: "numeric",
    } as const;
    if (!endDate) return startDate.toLocaleDateString("en-US", options);
    return `${startDate.toLocaleDateString(
      "en-US",
      options
    )} to ${endDate.toLocaleDateString("en-US", options)}`;
  }

  const [selectedEvent, setSelectedEvent] = useState<string[]>([]);

  const options = [
    { event: "GIG", icon: <PiTelevisionBold className="text-2xl" /> },
    { event: "DJ", icon: <GiMusicalNotes className="text-2xl" /> },
    { event: "TALK", icon: <GrChatOption className="text-2xl" /> },
  ];

  const handleCheckedChange = (value: string, checked: boolean) => {
    setSelectedEvent((prev) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value)
    );
  };

  useEffect(() => {
    async function getEvents() {
      try {
        const { data, error } = await supabase
          .from("events")
          .select("*")
          .eq("city", selectedCity ?? city ?? "Amsterdam")
          .limit(10);

        if (error) {
          console.error("Supabase error:", error);
          return;
        }

        if (data) {
          setEvents(data);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    }

    getEvents();
  }, [selectedCity, city]);

  return (
    <section className="container px-5 py-16">
      <div className="flex flex-col gap-4 mb-10">
        <div className="flex flex-wrap w-full overflow-x-auto items-center gap-2 mt-10">
          <DropdownMenu.Root
            open={isOpen}
            onOpenChange={() => setIsOpen((prev) => !prev)}
          >
            <DropdownMenu.Trigger
              asChild
              className="px-5 py-3 bg-chicago-200/10 hover:bg-chicago-200/30 transition-all duration-150 cursor-pointer shadow text-white-green"
            >
              <span className="flex items-center gap-2">
                <CiLocationOn className="text-2xl" />
                <span>{selectedCity ?? "Location"}</span>
              </span>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content className="flex flex-col gap-3 w-fit md:w-[250px] z-30 bg-chicago-900 text-white-green rounded-md ml-3">
                <div>
                  <Fieldset.Root className="rounded-md border-b border-chicago-200">
                    <Fieldset.Input
                      ref={inputRef}
                      id="search"
                      value={selectedCity ?? ""}
                      icon={<IoSearchOutline />}
                      className="p-3 border-none w-[100px]"
                      placeholder="Find a city"
                    />
                  </Fieldset.Root>
                  <ul className="flex flex-col w-full h-[400px] overflow-scroll">
                    <li className="uppercase py-3 px-5 bg-chicago-100/70 text-chicago-500">
                      {country}
                    </li>
                    {cities.map((city) => (
                      <li
                        onClick={() => handleCitySelect(city)}
                        key={city}
                        className={clsx(
                          "hover:bg-chicago-100/60 transition-all duration-150 py-2 flex justify-start px-5 cursor-pointer text-sm",
                          { "text-blue-400": city === selectedCity }
                        )}
                      >
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger
              asChild
              className="px-5 py-3 bg-chicago-200/10 hover:bg-chicago-200/30 transition-all duration-150 outline-none cursor-pointer shadow text-white-green"
            >
              <span className="flex items-center gap-2 ">
                <CiCalendarDate className="text-2xl" />
                <span>{formatDateRange(selectedDate[0], selectedDate[1])}</span>
              </span>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content className="w-full md:w-fit ml-5 mt-3 px-3 z-20">
                <DatePicker
                  selected={selectedDate[0]}
                  onChange={handleDateChange}
                  startDate={selectedDate[0]}
                  endDate={selectedDate[selectedDate.length - 1]}
                  selectsRange
                  inline
                  dropdownMode="select"
                  className="h-5 !bg-chicago-900 !text-white-green !py-3"
                />
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger
              asChild
              className="px-5 py-3 bg-chicago-200/10 hover:bg-chicago-200/30 transition-all duration-150 cursor-pointer shadow text-white-green"
            >
              <span className="flex items-center gap-2">
                <MdAttachMoney className="text-2xl" />
                {selectedPrice
                  ? `$${selectedPrice[0]}  to  $${
                      selectedPrice[selectedPrice.length - 1]
                    }`
                  : "Price"}
              </span>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content className="w-full md:w-[250px] bg-chicago-900 rounded-lg py-5 px-3 shadow-xl z-50 data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut">
                <form className="block">
                  <Slider.Root
                    className="relative touch-none flex items-center"
                    onValueChange={(val) => setSelectedPrice(val)}
                    value={selectedPrice}
                    defaultValue={[0, 500]}
                    min={0}
                    max={500}
                    step={1}
                  >
                    <Slider.Track className="flex-1 bg-chicago-800 relative rounded-full h-2">
                      <Slider.Range className="absolute bg-chicago-200 rounded-full h-full" />
                    </Slider.Track>
                    <Slider.Thumb
                      className="block size-5 shadow-md rounded-md hover:bg-chicago-950 bg-chicago-700 focus:outline-none focus:shadow-lg"
                      aria-label="Minimum price"
                    />
                    <Slider.Thumb
                      className="block size-5 shadow-md rounded-md hover:bg-chicago-950 bg-chicago-700 focus:outline-none focus:shadow-lg"
                      aria-label="Maximum price"
                    />
                  </Slider.Root>
                </form>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
        <div className="flex items-center gap-2">
          {options.map((option, i) => (
            <Checkbox.Root
              key={i}
              value={option.event}
              checked={selectedEvent.includes(option.event)}
              onCheckedChange={(checked) =>
                handleCheckedChange(option.event, !!checked)
              }
              className="data-[state=checked]:bg-white-green data-[state=checked]:text-chicago-900 data-[state=unchecked]:text-white-green data-[state=unchecked]:bg-chicago-200/10  cursor-pointer size-20 flex items-center justify-center flex-col gap-1 transition-all duration-150 bg-chicago-900 shadow text-white-green"
              id="GIG"
            >
              {option.icon}
              {option.event}
            </Checkbox.Root>
          ))}
        </div>
      </div>
      <h2 className="text-2xl md:text-4xl text-white-green">
        All Events in <span className="text-chicago-300">{selectedCity}</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-5">
        {events.map((event, i) => (
          <Card event={event} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Index;
