"use client";
import Button from "../Button";
import { useLoginModal } from "@/hooks/useLoginModal";

interface Props {
  large?: boolean;
  className?: string;
}

const LoginButton: React.FC<Props> = ({ large = false, className }) => {
  const loginModal = useLoginModal();
  const onLogin = () => {
    loginModal.setOpen();
  };
  return (
    <Button
      className={className}
      large={large}
      actionLabel="Log in"
      isSimple
      onClick={onLogin}
    />
  );
};

export default LoginButton;
