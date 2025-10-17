import { QRCodeCanvas } from "qrcode.react";

interface Props {
  code: string;
}
const Content = ({ code }: Props) => {
  return (
    <div>
      <QRCodeCanvas
        className="size-[250px] rounded-md bg-chicago-200"
        value={code}
        size={256}
      />
    </div>
  );
};

export default Content;
