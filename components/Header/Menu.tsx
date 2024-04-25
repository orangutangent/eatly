import Link from "next/link";
import React from "react";

interface Props {
  links: { name: string; path: string }[];
}

const Menu: React.FC<Props> = ({ links }) => {
  return (
    <nav>
      <ul className="flex text-lg text-[var(--gray-color)] font-[500]">
        {links.map((link) => (
          <li className="hover:text-[var(--main-color)] mx-4" key={link.name}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
