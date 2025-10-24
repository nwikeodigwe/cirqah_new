import { useForm, FormProvider } from "react-hook-form";
import Event, { type Schema } from "./schema";
import Image from "./image";
import Title from "./title";
import DateAndLocation from "./date";
import Lineup from "./lineup";
import Save from "./save";
import { useEffect, useState } from "react";
import supabase from "@/supabase";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import clsx from "clsx";
import { file } from "@/services/File";
import { useNavigate } from "react-router";

const Index = () => {
  const defaultValues = Event.parse({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const { id } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  const methods = useForm<Schema>({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues,
  });

  useEffect(() => {
    async function getAuth() {
      const { data } = await supabase.auth.getSession();

      if (!data.session) navigate("/");
    }
    getAuth();
  }, [navigate]);

  const submitHandler = async (data: Schema) => {
    setIsSubmitting(true);
    try {
      file.payload = data.image;
      const image_url = await file.upload();
      const { data: eventResult, error: eventError } = await supabase
        .from("events")
        .insert({
          title: data.title,
          event_type: data.event_type,
          date: data.date,
          start_time: data.start_time,
          end_time: data.end_time,
          venue: data.venue,
          city: data.city,
          state: data.state,
          country: data.country,
          postal_code: data.postal_code,
          summary: data.summary,
          location_type: data.location_type,
          image_url: image_url,
          user_id: id,
        })
        .select()
        .single();

      if (eventError) {
        throw new Error(eventError.message);
      }

      if (!eventResult) {
        throw new Error("Failed to create event: No data returned");
      }

      const { error: lineupError } = await supabase
        .from("event_lineups")
        .insert({
          event_id: eventResult.id,
          title: data.lineup_title,
          description: data.lineup_description,
          tagline: data.lineup_tagline,
        });

      if (lineupError) {
        throw new Error(lineupError.message);
      }

      setSuccess("Event and lineup created successfully!");
      methods.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-chicago-950 py-20">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(submitHandler)}
          className="flex flex-col gap-5 max-w-3xl mx-auto"
        >
          <Image />
          <div
            className={clsx(
              "text-red-500 bg-red-500/10 p-4",
              !error && "hidden"
            )}
          >
            {error}
          </div>
          <div
            className={clsx("text-green bg-green/10 p-4", !success && "hidden")}
          >
            {success}
          </div>
          <Title />
          <DateAndLocation />
          <Lineup />
          <Save isSubmitting={isSubmitting} />
        </form>
      </FormProvider>
    </section>
  );
};

export default Index;
