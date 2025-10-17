import { useEffect, useState } from "react";
import Form from "./form";
import { client } from "@/sanity";
import type { Auth } from "@/types/sanity.types";

const Login = () => {
  const [content, setContent] = useState<Auth>();

  useEffect(() => {
    async function getContent() {
      const data = await client.fetch(
        "*[_type == 'auth'][0]{title, subheading, submit, disclaimer, placeholder, google}"
      );
      setContent(data);
    }

    getContent();
  }, []);
  return (
    <div className="flex flex-col space-y-3 max-w-xl mx-auto">
      <h2 className="text-3xl font-medium text-center">{content?.title}</h2>
      <p className="text-sm text-center text-chicago-700">
        {content?.subheading}
      </p>
      <Form data={content} />
    </div>
  );
};

export default Login;
