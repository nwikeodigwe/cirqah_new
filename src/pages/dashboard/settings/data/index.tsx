import { Link } from "react-router";
const Index = () => {
  return (
    <div className="container py-5 overflow-y-scroll h-[90vh]">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl mb-5">Request personal data</h3>
      </div>
      <hr className="text-chicago-200 mt-3" />
      <div className="space-y-1 mt-5">
        <p className="text-sm text-chicago-500">
          If you want to request a copy of your personal data from Cirqah,
          submit a request in our{" "}
          <Link to="/privacy" className="text-amber-500 hover:underline">
            privacy center
          </Link>
          . Once there, select "Take Control".
        </p>
      </div>
    </div>
  );
};

export default Index;
