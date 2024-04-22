import Link from "next/link";
import React from "react";

interface Props {
  links: { name: string; path: string }[];
}

const Menu: React.FC<Props> = ({ links }) => {
  return (
    <nav>
      <div className="hidden md:block ">
        <ul className="flex text-lg text-[var(--gray-color)] font-semibold">
          {links.map((link) => (
            <li className="hover:text-[var(--main-color)] mx-4" key={link.name}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
