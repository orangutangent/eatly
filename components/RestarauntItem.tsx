import Image from "next/image";
import purpleStar from "../public/purpleStar.svg";
import bookmark from "../public/bookmark.svg";

interface Props {
  title: string;
  tag: "Trending" | "Healthy" | "Fast";
  rating: number;
  deliveryTime: number;
  imgUrl: string;
}

const RestarauntItem: React.FC<Props> = ({
  title,
  tag,
  rating,
  deliveryTime,
  imgUrl,
}) => {
  return (
    <div className="rounded-2xl  relative overflow-hidden bg-white shadow-xl hover:scale-[1.1] duration-300 ease-in-out">
      <button className="absolute bottom-2 right-2">
        <Image src={bookmark} alt="bookmark" width={36} height={36} />
      </button>
      <Image
        className="w-full"
        src={imgUrl}
        alt="image"
        width={200}
        height={200}
        quality={100}
      />
      <div className="p-4 flex flex-col items start">
        <p
          className={`py-[1px] px-[3px] w-fit rounded-md font-[600]
        ${tag === "Trending" && "bg-red-200 text-red-500"}
        ${tag === "Healthy" && "bg-amber-200 text-amber-500"}
        ${tag === "Fast" && "bg-blue-200 text-blue-500"}
        text-[13px]
        `}
        >
          {tag}
        </p>
        <p className="font-[600] text-[26px] text-[#323142]">{title}</p>
        <div className="flex gap-1 text-[20px] text-gray-300">
          <p>{deliveryTime}min •</p>
          <Image src={purpleStar} alt="image" width={26} />
          <p>{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default RestarauntItem;
