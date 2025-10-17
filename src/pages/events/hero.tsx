const Hero = () => {
  return (
    <section className="bg-[url('./assets/explore/hero-mobile.png')] md:bg-[url('./assets/explore/hero-desktop.png')] lg:bg-[url('./assets/explore/hero-desktop.png')] bg-cover bg-center h-svh flex flex-col justify-end container p-5 space-y-4 relative">
      <div className="absolute inset-0 h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#151414_100%)]"></div>
      <div className="z-10 py-10 space-y-2">
        <h2 className="text-4xl md:text-6xl md:w-[15ch] text-white-green">
          You are in the experience
        </h2>
        <p className="text-chicago-300 text-sm md:text-xl md:leading-7 md:w-[40ch]">
          Welcome to the official event page. Here you will find everything you
          need.
        </p>
      </div>
    </section>
  );
};

export default Hero;
