const Academy = () => {
  return (
    <>
    <section className="container py-20 flex flex-col justify-center items-center space-y-2">
      <h1 className="text-4xl font-bold text-white-green mt-10">Learn. Create. Own the Future.</h1>
      <p className="text-3xl font-bold text-center tracking-wide text-chicago-300 ">Empowering creators to design immersive experiences, build communities, and master the tools of the spatial web.</p>
      <div className="flex items-center mx-auto">
        <button className="px-6 py-3 bg-green text-white rounded-md shadow-md hover:scale-105 transition-all duration-150">Become a member</button>
        <button className="px-6 py-3 border border-chicago-300 text-chicago-300 rounded-md shadow-md hover:scale-105 transition-all duration-150 ml-5">Become a mentor</button>
      </div>
    </section>
    <section className="container">
      <h1 className="text-white-green font-bold text-4xl">What is Cirqah Acedemy</h1>
      <p className="text-chicago-300 w-[100ch]">Cirqah Academy is a learning initiative for creators, curators, and cultural innovators — teaching immersive design, event hosting, and Web3 community tools.</p>
      <p className="text-chicago-300">Learn, co-create, and evolve inside a network shaping the future of digital culture.</p>
    </section>
    <section className="container flex flex-col justify-center items-center bg-chicago-900 rounded-md py-10 mt-10 shadow-md space-y-4">
      <h1 className="text-white-green font-bold text-4xl">Become a Founding Learner</h1>
      <p className="w-[20ch] text-center text-chicago-300">Join the first 100 creators building immersive, community-owned experiences. Get mentors, tools, and early access.</p>
      <button className="px-6 py-3 bg-green text-white rounded-md shadow-md hover:scale-105 transition-all duration-150 mt-5">Join the waitlist</button>
    </section>
    </>
  )
}

export default Academy