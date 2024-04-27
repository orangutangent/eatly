"use client";
import Button from "../Button";
import { useSignUpModal } from "@/hooks/useSignUpModal";

interface Props {
  large?: boolean;
  fontSize?: number;
}

const SignUpButton: React.FC<Props> = ({ large = false, fontSize }) => {
  const signUpModal = useSignUpModal();
  return (
    <Button
      fontSize={fontSize}
      large={large}
      actionLabel="Sign up"
      onClick={signUpModal.setOpen}
    />
  );
};

export default SignUpButton;
