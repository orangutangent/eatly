import Image from "next/image";
import Menu from "./Menu";
import { Poppins } from "next/font/google";
import PullOutMenu from "./PullOutMenu";
import LoginButton from "../Auth/LoginButton";
import SignUpButton from "../Auth/SignUpButton";
import Logo from "../Logo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});

export const links = [
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
        <div className="flex items-center justify-between gap-4 my-8">
          <Logo />

          <div className="hidden md:block ">
            <Menu links={links} />
          </div>
          <div className="hidden sm:flex w-full max-w-[250px] ms-auto gap-4">
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
