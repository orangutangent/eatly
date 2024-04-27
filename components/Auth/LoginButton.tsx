"use client";
import Button from "../Button";
import { useLoginModal } from "@/hooks/useLoginModal";

interface Props {
  large?: boolean;
  fontSize?: number;
}

const LoginButton: React.FC<Props> = ({ large = false, fontSize }) => {
  const loginModal = useLoginModal();
  const onLogin = () => {
    loginModal.setOpen();
  };
  return (
    <Button
      fontSize={fontSize}
      large={large}
      actionLabel="Log in"
      isSimple
      onClick={onLogin}
    />
  );
};

export default LoginButton;
