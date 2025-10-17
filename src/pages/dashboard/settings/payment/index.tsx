import { CiCircleInfo } from "react-icons/ci";

const Index = () => {
  return (
    <div className="container py-5 overflow-y-scroll h-[90vh]">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl mb-5">Credit / Debit Cards</h3>
      </div>
      <hr className="text-chicago-200 mt-3" />
      <div className="mt-5">
        <div className="bg-chicago-100/20 flex items-center gap-5 text-chicago-500 p-5 rounded-sm">
          <CiCircleInfo className="text-2xl" />{" "}
          <span className="text-sm">
            You currently don't have any debit or credit cards saved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;
