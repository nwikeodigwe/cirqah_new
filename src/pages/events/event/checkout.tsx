import Counter from "./counter";

const Checkout = () => {
  return (
    <section className="bg-chicago-900 py-16 min-h-svh">
      <div className="container px-5 mt-20 max-w-2xl mx-auto">
        <h2 className="text-green text-4xl">Ticket Selection</h2>
        <ul className="mt-10">
          <li className="space-y-2 flex justify-between border-b border-chicago-800/70 py-4">
            <div>
              <h3 className="text-white-green text-xl">Regular Pass</h3>
              <p className="text-chicago-500">Access the main event</p>
              <p className="text-sm text-stone-600">Price: $40</p>
            </div>
            <Counter />
          </li>
          <li className="space-y-2 flex justify-between border-b border-chicago-800/70 py-4">
            <div>
              <h3 className="text-white-green text-xl">VIP Pass</h3>
              <p className="text-chicago-500">Access the main event</p>
              <p className="text-sm text-stone-600">Price: $40</p>
            </div>
            <Counter />
          </li>
          <li className="space-y-2 flex justify-between py-4">
            <div>
              <h3 className="text-white-green  text-xl">Back Stage Pass</h3>
              <p className="text-chicago-500">Access the main event</p>
              <p className="text-sm text-stone-600">Price: $40</p>
            </div>
            <Counter />
          </li>
        </ul>
        <div>
          <h2 className="text-white-green text-2xl">Total</h2>
          <p className="text-chicago-500">$0.00</p>
        </div>
        <div className="flex items-center justify-between mt-7">
          <button className="border border-green  text-green py-3 px-10 shadow">
            Cancel
          </button>
          <button className="text-white bg-green py-3 px-10 shadow">
            Continue
          </button>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
