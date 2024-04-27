"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import Link from "next/link";
import LoginButton from "../Auth/LoginButton";
import SignUpButton from "../Auth/SignUpButton";

interface Props {
  links: { name: string; path: string }[];
}

const Menu: React.FC<Props> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuWidth = 500;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: { x: 0 },
    closed: { x: `100%` },
  };

  return (
    <aside className=" flex md:hidden items-center justify-between h-16 px-4">
      <button
        onClick={toggleMenu}
        className=" flex items-center p-1 text-gray-700 hover:text-gray-900 focus:outline-none"
      >
        {isOpen ? <MdClose size={30} /> : <MdOutlineMenu size={30} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`absolute z-10 top-0 right-0 w-80 h-screen bg-gray-200 `}
            variants={menuVariants}
            animate={isOpen ? "open" : "closed"}
            initial="closed"
            exit="closed"
            transition={{ duration: 0.3 }}
          >
            <button className="absolute top-12 right-[32px]">
              <MdClose size={30} onClick={toggleMenu} />
            </button>
            <ul className="flex flex-col mt-8 p-4 space-y-4">
              {links.map((link) => (
                <li
                  key={link.name}
                  className=" font-[600] text-[var(--gray-color)] hover:text-[var(--main-color)] text-[35px]"
                >
                  <Link href={link.path} className=" ">
                    {link.name}
                  </Link>
                </li>
              ))}
              <div className="sm:hidden">
                <li>
                  <LoginButton fontSize={35} large />
                </li>
                <li>
                  <SignUpButton fontSize={35} large />
                </li>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
};

export default Menu;
