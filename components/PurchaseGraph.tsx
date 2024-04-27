import { StaticImageData } from "next/image";
import Image from "next/image";

export type PurchaseGraphType = {
  name: string;
  graphText: string;
  icon: StaticImageData;
  cost: string;
  color: "purple" | "amber" | "green";
  percents: number;
};

const PurchaseGraph: React.FC<PurchaseGraphType> = ({
  name,
  graphText,
  icon,
  cost,
  color,
  percents,
}) => {
  return (
    <div className="border-2 border-gray-100 shadow-md p-4 rounded-xl">
      <div className="flex flex-col sm:flex-row justify-start sm:justify-between">
        <div className="flex gap-4">
          <Image src={icon} alt="icon" width={45} />
          <div className="flex flex-col">
            <p className="text-[#323142] text-[19px] font-[600]">{name}</p>
            <p className="text-gray-400 text-[16px] ">{graphText}</p>
          </div>
        </div>
        <div className="flex sm:justify-center justify-end items-center ">
          <p className="text-[#323142] text-[22px] font-[600]">{cost}</p>
        </div>
      </div>
      <div
        className={`w-full relative 
      ${color === "purple" && "bg-purple-200"}
      ${color === "amber" && "bg-amber-200"}
      ${color === "green" && "bg-green-200"}
       h-[10px] mt-4 rounded-full`}
      >
        <div
          className={`w-[${percents}%] h-[10px] rounded-full
        ${color === "purple" && "bg-purple-500"}
        ${color === "amber" && "bg-amber-500"}
        ${color === "green" && "bg-green-500"}
        `}
        ></div>
      </div>
    </div>
  );
};

export default PurchaseGraph;
