"use client";
import { useLoginModal } from "@/hooks/useLoginModal";
import { useSignUpModal } from "@/hooks/useSignUpModal";
import Modal from "../Modal";
import Button from "../Button";
import Input from "../Input";
import GoogleButton from "../Auth/GoogleButton";
import AppleButton from "../Auth/AppleButton";
import Image from "next/image";
import foodImage from "../../public/foodImage.png";
import grapgImage from "../../public/graph.png";
import Purchase from "../Purchase";
import SideBody from "./SideBody";

const SignUpModal = () => {
  const loginModal = useLoginModal();
  const signUpModal = useSignUpModal();
  const sideBody = <SideBody />;
  const footer = (
    <footer className="flex justify-between text-gray-500 font-[500] ">
      <button>Privacy Police</button>
      <button>Copyright 2022</button>
    </footer>
  );

  const body = (
    <div className="flex flex-col ">
      <div className="flex justify-between gap-[25px] ">
        <div className="w-1/2">
          <GoogleButton />
        </div>
        <div className="w-1/2">
          <AppleButton />
        </div>
      </div>
      <p className="text-center text-gray-400 font-[500] text-[20px] my-4">
        OR
      </p>
      <form className="flex flex-col gap-[25px]" action="">
        <Input placeholder="Full Name" type="text" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" isPassword />
        <Button
          type="submit"
          large={true}
          actionLabel="Login"
          onClick={() => {}}
        />
      </form>
      <p className="text-center font-[500] text-[20px] mt-[2px]">
        Already have an account?{" "}
        <span
          onClick={() => {
            loginModal.setOpen();
            signUpModal.setClose();
          }}
          className="text-[var(--main-color)] cursor-pointer"
        >
          Log in
        </span>
      </p>
    </div>
  );
  return (
    <div>
      <Modal
        title="Sign up to Eatly"
        body={body}
        footer={footer}
        sideBody={sideBody}
        isOpen={signUpModal.isOpen}
        onClose={signUpModal.setClose}
      />
    </div>
  );
};

export default SignUpModal;
