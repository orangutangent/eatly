import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  status: "On the way" | "Delivered" | "Cancelled";
  time: string;
  image: StaticImageData;
}

const Purchase: React.FC<Props> = ({ title, status, time, image }) => {
  return (
    <div className="relative flex gap-6 p-2 rounded-2xl bg-white  shadow-lg">
      <div>
        <Image src={image} alt="image" width={65} />
      </div>
      <div className="flex flex-col mt-2">
        <p className="font-[600] text-[16px]">{title}</p>
        <p className="text-[10px]">{status}</p>
      </div>
      <p className="text-gray-400 text-[500] absolute right-4 bottom-2 text-[11px]">
        {time}
      </p>
    </div>
  );
};

export default Purchase;
