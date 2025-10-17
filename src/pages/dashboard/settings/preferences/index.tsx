import { FormProvider, useForm } from "react-hook-form";
import Attending from "./attending";
import Hosting from "./hosting";
import Save from "./save";
import { zodResolver } from "@hookform/resolvers/zod";
import Preferences, { type Schema } from "./schema";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import supabase from "@/supabase";

const Index = () => {
  const preferences = useSelector((state: RootState) => state.preferences);
  const user = useSelector((state: RootState) => state.user);

  const defaultValues = {
    discover_events: preferences.discover_events,
    friends_buy_ticket: preferences.friends_buy_ticket,
    organizer_announce_event: preferences.organizer_announce_event,
    events_on_sale: preferences.events_on_sale,
    events_liked: preferences.events_liked,
    feature_update: preferences.feature_update,
    event_sales_recap: preferences.event_sales_recap,
    reminder_for_next_event: preferences.reminder_for_next_event,
    confirmation_from_attendies: preferences.confirmation_from_attendies,
  };
  const methods = useForm<Schema>({
    defaultValues,
    resolver: zodResolver(Preferences),
    mode: "onChange",
    reValidateMode: "onBlur",
  });

  const onSubmit = async (data: Schema) => {
    try {
      const response = await supabase
        .from("preferences")
        .upsert(
          {
            id: user.id,
            discover_events: data.discover_events,
            friends_buy_ticket: data.friends_buy_ticket,
            organizer_announce_event: data.organizer_announce_event,
            events_on_sale: data.events_on_sale,
            events_liked: data.events_liked,
            feature_update: data.feature_update,
            event_sales_recap: data.event_sales_recap,
            reminder_for_next_event: data.reminder_for_next_event,
            confirmation_from_attendies: data.confirmation_from_attendies,
          },
          { onConflict: "id", ignoreDuplicates: false }
        )
        .select();
      console.info(response);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="container py-5 overflow-y-scroll h-[90vh]">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl">Communication Preferences</h3>
      </div>
      <hr className="text-chicago-200 mt-3" />
      <div className="space-y-5">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Attending />
            <Hosting />
            <Save />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Index;
