"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

interface Props {
  placeholder?: string;
  type?: string;
  onChange?: () => void;
  value?: string;
  name?: string;
  isPassword?: boolean;
}

const Input: React.FC<Props> = ({
  placeholder,
  type,
  onChange,
  value,
  name,
  isPassword = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative">
      <input
        className={`bg-gray-100  w-full rounded-2xl px-4 py-6 text-gray-700 text-[20px] font-[600] focus:outline-[var(--main-color)] focus:bg-white
            `}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        type={isPassword ? (showPassword ? "text" : "password") : type}
      />
      {isPassword && (
        <label className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--gray-color)] hover:text-[var(--main-color)] hover:scale-105 duration-300 cursor-pointer">
          {showPassword ? (
            <IoMdEye size={30} onClick={() => setShowPassword(!showPassword)} />
          ) : (
            <IoMdEyeOff
              size={30}
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </label>
      )}
    </div>
  );
};

export default Input;
