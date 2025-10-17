interface Props {
  action: () => void;
  data?: {
    subheading?: string;
    title?: string;
    description?: string;
    button?: string;
  };
}
const Fan = ({ action, data }: Props) => {
  return (
    <div className="flex flex-col items-center py-10 md:py-20 px-5 md:px-10 space-y-2 shadow">
      <p className="text-green text-xs">{data?.subheading}</p>
      <h2 className="text-2xl font-medium">{data?.title}</h2>
      <p className="text-sm text-center text-chicago-700">
        {data?.description}
      </p>
      <button
        onClick={action}
        className="px-10 py-2 bg-[linear-gradient(90deg,#072903_0%,#2FA220_100%)] inline-block mt-4 text-white-green"
      >
        {data?.button}
      </button>
    </div>
  );
};

export default Fan;
