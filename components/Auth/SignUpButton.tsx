"use client";
import Button from "../Button";
import { useSignUpModal } from "@/hooks/useSignUpModal";

interface Props {
  large?: boolean;
  className?: string;
}

const SignUpButton: React.FC<Props> = ({ large = false, className }) => {
  const signUpModal = useSignUpModal();
  return (
    <Button
      className={className}
      large={large}
      actionLabel="Sign up"
      onClick={signUpModal.setOpen}
    />
  );
};

export default SignUpButton;
