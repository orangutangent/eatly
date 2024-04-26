import Image from "next/image";
import Button from "../Button";
import trustpilot from "../../public/trustpilot.svg";
import stars from "../../public/stars.svg";
import stripes1 from "../../public/3stripes1.svg";
import stripes2 from "../../public/3stripes2.svg";
import arrow from "../../public/arrow.svg";
import graph from "../../public/graph.png";
import foodImage from "../../public/foodRounded.svg";
import Purchase from "../Purchase";

const GetStartedSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-[1250px] mx-8 xl:mx-auto">
      <div className="flex flex-col  items-center lg:items-start col-span-1">
        <div className="flex items-center gap-1">
          <div className="w-[54px] rounded-md h-[1px] bg-gray-300"></div>
          <p className="text-[15px] text-gray-300 ">OVER 1000 USERS</p>
        </div>
        <div className="text-center text-[60px] font-[600] text-black">
          <p className="inline">Enjoy Foods All Over The </p>
          <p className="inline text-[var(--main-color)]">World</p>
        </div>
        <div>
          <p className="text-[18px] inline text-gray-500 text-center mb-4">
            EatLy help you set saving goals, earn cash back offers, Go to
            disclaimer for more details and get paychecks up to two days early.{" "}
          </p>
          <p className="inline text-[var(--main-color)]"> Get a $20 bonus.</p>
        </div>
        <div className="flex gap-4 w-max my-4">
          <Button actionLabel="Get Started" />
          <Button actionLabel="Go Pro" secondary />
        </div>
        <div className="flex gap-4 items-center my-8">
          <Image src={trustpilot} alt="trustpilot" />
          <Image src={stars} alt="stars" />
          <p className="text-[16px] text-gray-500">4900+</p>
        </div>
      </div>
      <div className="relative col-span-1 flex justify-center ">
        <div className="relative w-[600px] h-[550px]">
          <div className="absolute top-0 right-[150px]">
            <Image src={stripes1} alt="stripes1" />
          </div>
          <div className="absolute bottom-0  left-[50px]">
            <Image src={stripes2} alt="stripes2" />
          </div>
          <div className="absolute top-[140px] right-[50px]">
            <Image src={arrow} alt="arrow" />
          </div>
          <div className="absolute top-[30px] right-[100px] ">
            <Image src={foodImage} alt="foodImage" width={450} />
          </div>
          <div className="absolute top-[250px] left-[50px]">
            <Image src={graph} alt="graph" width={300} />
          </div>
          <div className="w-[315px] absolute top-[30px] right-[50px]">
            <Purchase
              title="Chicken Hell"
              status="On the way"
              time="3:09 PM"
              image={foodImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
