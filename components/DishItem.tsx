import Image from "next/image";
import purpleStar from "../public/purpleStar.svg";
import heart from "../public/heart.svg";

interface Props {
  name: string;
  deliveryTime: number;
  price: string;
  tag: "Trending" | "Healthy" | "Supreme";
  rating: number;
  imgUrl: string;
}

const DishItem: React.FC<Props> = ({
  name,
  deliveryTime,
  price,
  tag,
  rating,
  imgUrl,
}) => {
  return (
    <div className="rounded-2xl  relative overflow-hidden bg-white shadow-xl hover:scale-[1.1] duration-300 ease-in-out">
      <Image
        className="mx-auto"
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
                    ${tag === "Supreme" && "bg-green-200 text-green-500"}
                    text-[12px]
                    `}
        >
          {tag}
        </p>
        <p className="font-[600] text-[23px] text-[#323142]">{name}</p>
        <div className="flex gap- text-[17px] text-gray-500">
          <p className="">{deliveryTime} min -</p>
          <Image src={purpleStar} alt="star" width={26} height={26} />
          <p className="">{rating}</p>
        </div>
        <div className="flex items-center font-[600]">
          <p className="text-[#323142] text-[26px] ">${price.slice(0, -2)}</p>
          <p className="text-[20px] text-gray-500">{price.slice(-2)}</p>
        </div>
      </div>
      <button className="absolute text-white box-border text-[26px] bg-[#323142] hover:bg-[var(--main-color)] hover:scale-105 duration-300 ease-in-out rounded-lg py-[1px] px-[9px] bottom-2 right-2">
        +
      </button>
      <button className="absolute hover:scale-110 duration-300 ease-in-out  top-2 right-2">
        <Image src={heart} alt="heart" width={20} height={20} />
      </button>
    </div>
  );
};

export default DishItem;
