import { StaticImageData } from "next/image";
import Image from "next/image";
import Quotes from "../public/Quotes.svg";
import Star from "../public/purpleStar.svg";

interface Props {
  id: number;
  author: string;
  yearsWithUs: number;
  avatar: StaticImageData;
  text: string;
  rating: number;
  index: number;
  currentIndex: number;
}

const Review: React.FC<Props> = ({
  id,
  author,
  yearsWithUs,
  avatar,
  text,
  rating,
  index,
  currentIndex,
}) => {
  return (
    <div
      className={`w-full min-w-[300px] max-w-[510px] space-y-8 p-8 border-2 border-gray-100 rounded-2xl
    `}
    >
      <div
        className={`flex gap-4 justify-between ${
          index === currentIndex ? "block" : "hidden"
        } `}
      >
        <div className="flex gap-4">
          <Image src={avatar} alt="avatar" width={71} />
          <div className="flex flex-col">
            <p className="text-[21px] font-[600] text-black">{author}</p>
            <p className="text-gray-400 text-17px">
              {yearsWithUs} Year With Us
            </p>
          </div>
        </div>
        <Image src={Quotes} alt="Quotes" width={58} />
      </div>
      <div className="text-center">
        <p className="text-[18px] text-[#606060] italic">
          {'"'}
          {text}
          {'"'}
        </p>
      </div>
      <div className="flex items-center justify-start">
        {Array(rating)
          .fill(0)
          .map((_, index) => (
            <Image src={Star} alt="Star" key={index} />
          ))}
      </div>
    </div>
  );
};

export default Review;
