import Link from "next/link";
import Image from "next/image";
import Menu from "./Header/Menu";
import Logo from "./Logo";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const links = [
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Contacts",
    path: "/contacts",
  },
];

const iconSize = 25;

const socialNetworks = [
  {
    name: "Instagram",
    icon: <IoLogoInstagram size={iconSize} />,
    path: "",
  },
  {
    name: "Linkedin",
    icon: <FaLinkedinIn size={iconSize} />,
    path: "",
  },
  {
    name: "Facebook",
    icon: <FaFacebookF size={iconSize} />,
    path: "",
  },
  {
    name: "Twitter",
    icon: <FaTwitter size={iconSize} />,
    path: "",
  },
];

const Footer = () => {
  return (
    <footer className="bg-zinc-100 text-zinc-800 bottom-0 pt-20 pb-10 w-full">
      <div className="max-w-[1250px] mx-4 xl:mx-auto flex flex-col">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 mb-[50px]">
          <Logo />
          <Menu links={links} />
        </div>

        <div className="h-[1px] w-full bg-gray-300 mb-10"></div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 font-[500]">
            © 2023 EATLY All Rights Reserved.
          </p>
          <ul className="flex gap-8">
            {socialNetworks.map((socialNetwork) => (
              <li
                key={socialNetwork.name}
                className="text-gray-600 hover:text-[var(--main-color)]"
              >
                <Link href={socialNetwork.path}>{socialNetwork.icon}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
