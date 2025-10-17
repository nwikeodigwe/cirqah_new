import { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router";
import { client } from "@/sanity";
import Menu from "./menu";
import Nav from "./nav";

const Index = () => {
  const [cta, setCta] = useState();

  useEffect(() => {
    async function getCta() {
      const data = await client.fetch(`*[_type == "nav"][0]{navButton}`);
      setCta(data.navButton);
    }

    getCta();
  });

  return (
    <header className="absolute top-0 left-0 right-0 container px-5 py-3 bg-chicago-950/20 z-10">
      <div className="flex justify-between items-center">
        <Menu />
        <Link to="/" className="flex gap-2 items-center">
          <img src={logo} className="size-10" />
          <span className="text-white text-2xl font-kd2 uppercase">Cirqah</span>
        </Link>
        <Nav />
        <Link to="/auth" className="bg-green px-5 py-2 text-white-green shadow">
          {cta}
        </Link>
      </div>
    </header>
  );
};

export default Index;
