import Type from "./type";
import Form from "./form";
import { useFormContext } from "react-hook-form";
import type { Schema } from "../../schema";

const Index = () => {
  const { watch } = useFormContext<Schema>();
  const locationType = watch("location_type") || "in-person";

  const renderLocation = () => {
    switch (locationType) {
      case "in-person":
        return (
          <>
            <Form />
          </>
        );
      case "online":
        return (
          <div className="mt-5 p-2 bg-blue-50">
            <p className="text-blue-800">
              Online event details will be configured here.
            </p>
          </div>
        );
      case "to-be-announced":
        return (
          <div className="mt-5 p-3 bg-yellow-50">
            <p className="text-yellow-800">Location to be announced later.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h3 className="text-2xl my-5">Location</h3>
      <Type />
      {renderLocation()}
    </div>
  );
};

export default Index;
