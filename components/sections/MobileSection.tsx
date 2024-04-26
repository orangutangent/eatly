import mobile from "../../public/mobile.png";
import Image from "next/image";
import Button from "../Button";
import arrow from "../../public/arrow.svg";

const MobileSection = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-10 mx-10">
      <div className="flex flex-col  gap-4 justify-center">
        <div className="text-center">
          <h2 className="inline text-[45px] font-[600]">Premium </h2>
          <h2 className="inline text-[45px] text-[var(--main-color)] font-[600]">
            Quality{" "}
          </h2>
          <h2 className="inline text-[45px] font-[600]">For Your Health</h2>
        </div>
        <ul className="text-[20px] list-disc flex flex-col gap-8 text-[var(--gray-color)]">
          <li>
            <p>
              Premium quality food is made with ingredients that are packed with
              essential vitamins, minerals.
            </p>
          </li>
          <li>
            <p>
              These foods promote overall wellness by support healthy digestion
              and boosting immunity
            </p>
          </li>
        </ul>
        <div className="flex flex-col items-center lg:items-start">
          <Button actionLabel="Download" large />
          <Image
            src={arrow}
            alt="arrow"
            className="rotate-[45deg] translate-x-[-30px]"
          />
        </div>
      </div>
      <div className="w-full flex justify-center lg:order-first">
        <Image src={mobile} alt="mobile" width={304} />
      </div>
    </section>
  );
};

export default MobileSection;
