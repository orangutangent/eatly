import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});

const Logo = () => {
  return (
    <div className="flex items-center ">
      <Image src={"/logo.svg"} alt="logo" width={46} height={43} />
      <h1
        className={`text-[var(--main-color)] ml-2 text-xl ${poppins.className}`}
      >
        eatly
      </h1>
    </div>
  );
};

export default Logo;
