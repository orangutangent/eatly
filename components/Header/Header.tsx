import Image from "next/image";
import Menu from "./Menu";
import { Poppins } from "next/font/google";
import PullOutMenu from "./PullOutMenu";
import LoginButton from "../Auth/LoginButton";
import SignUpButton from "../Auth/SignUpButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});

const links = [
  {
    name: "Menu",
    path: "/menu",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "Contacts",
    path: "/contacts",
  },
];

const Header = () => {
  return (
    <header className="fixed z-8 top-0 w-full bg-white">
      <div className="h-32 max-w-[1250px] mx-4 xl:mx-auto">
        <div className="flex items-center justify-between my-8">
          <div className="flex items-center mx-4">
            <Image src={"/logo.svg"} alt="logo" width={46} height={43} />
            <h1
              className={`text-[var(--main-color)] ml-2 text-xl ${poppins.className}`}
            >
              eatly
            </h1>
          </div>
          <Menu links={links} />
          <div className="hidden sm:flex ms-auto gap-4">
            <LoginButton />
            <SignUpButton />
          </div>
          <PullOutMenu links={links} />
        </div>
        <div className="h-[1px] bottom-0 w-full bg-gray-300"></div>
      </div>
    </header>
  );
};

export default Header;
