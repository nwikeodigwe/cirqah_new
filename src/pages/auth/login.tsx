import type { Auth } from "@/types/sanity.types";
import { animate, variant } from "@/transition";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { client } from "@/sanity";
import Form from "./form";

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
    <motion.div
      variants={variant}
      initial="closed"
      animate="open"
      className="flex flex-col space-y-3 max-w-xl mx-auto"
    >
      <motion.h2
        variants={animate}
        className="text-3xl font-medium text-center"
      >
        {content?.title}
      </motion.h2>
      <motion.p
        variants={animate}
        className="text-sm text-center text-chicago-700"
      >
        {content?.subheading}
      </motion.p>
      <Form data={content} />
    </motion.div>
  );
};

export default Login;
