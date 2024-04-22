"use client";
import Button from "../Button";

interface Props {
  large?: boolean;
}

const LoginButton: React.FC<Props> = ({ large = false }) => {
  const onLogin = () => {};
  return (
    <Button large={large} actionLabel="Log in" isSimple onClick={onLogin} />
  );
};

export default LoginButton;
