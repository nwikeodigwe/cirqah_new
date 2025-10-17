interface Props {
  action: () => void;
  data?: {
    subheading?: string;
    title?: string;
    description?: string;
    button?: string;
  };
}

const Creator = ({ action, data }: Props) => {
  return (
    <div className="flex flex-col items-center space-y-2 bg-chicago-800 text-white-green py-10 md:py-20 px-5 md:px-10 shadow">
      <p className="text-green text-sm text-center">{data?.subheading}</p>
      <h2 className="text-2xl font-medium text-center">{data?.title}</h2>
      <p className="text-sm text-center text-chicago-100">
        {data?.description}
      </p>
      <button
        onClick={action}
        className="bg-[linear-gradient(90deg,#072903_0%,#2FA220_100%)] inline-block px-10 py-2 mt-4"
      >
        {data?.button}
      </button>
    </div>
  );
};

export default Creator;
