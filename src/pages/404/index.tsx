import { IoReturnDownBack } from "react-icons/io5";
import { Link } from "react-router";

const Index = () => {
  return (
    <section className="h-svh flex flex-col justify-center items-center px-5 bg-chicago-900 gap-3">
      <h2 className="text-7xl font-bold text-center text-white-green">Oops!</h2>
      <p className="text-chicago-300">
        We couldn't find the page you were looking for
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link
          to="/"
          className="bg-green text-white-green py-2 px-7 min-w-40 flex justify-center shadow gap-2"
        >
          <IoReturnDownBack className="text-2xl font-medium" />
          Go back
        </Link>
      </div>
    </section>
  );
};

export default Index;
