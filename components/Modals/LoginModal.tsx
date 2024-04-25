"use client";
import { useLoginModal } from "@/hooks/useLoginModal";
import { useSignUpModal } from "@/hooks/useSignUpModal";
import Modal from "../Modal";
import Button from "../Button";
import Input from "../Input";
import GoogleButton from "../Auth/GoogleButton";
import AppleButton from "../Auth/AppleButton";
import Image from "next/image";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const signUpModal = useSignUpModal();
  console.log(loginModal.isOpen);
  const footer = (
    <footer className="flex justify-between text-gray-500 font-[500] ">
      <button>Privacy Police</button>
      <button>Copyright 2022</button>
    </footer>
  );
  const sideBody = (
    <div>
      <Image src={"/Vector.png"} alt="logo" width={10} height={10} />
      <Image src={"/Vector-1.png"} alt="logo" width={10} height={10} />
      <Image src={"/Vector-2.png"} alt="logo" width={10} height={10} />
      <Image src={"/Vector-3.png"} alt="logo" width={10} height={10} />
    </div>
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
        Create A new account?{" "}
        <span
          onClick={() => {
            signUpModal.setOpen();
            loginModal.setClose();
          }}
          className="text-[var(--main-color)] cursor-pointer"
        >
          Sign Up
        </span>
      </p>
    </div>
  );
  return (
    <div>
      <Modal
        title="Sign in to Eatly"
        body={body}
        footer={footer}
        sideBody={sideBody}
        isOpen={loginModal.isOpen}
        onClose={loginModal.setClose}
      />
    </div>
  );
};

export default LoginModal;
