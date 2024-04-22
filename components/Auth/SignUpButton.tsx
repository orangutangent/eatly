"use client";
import Button from "../Button";

interface Props {
  large?: boolean;
}

const SignUpButton: React.FC<Props> = ({ large = false }) => {
  const onSignUp = () => {};
  return <Button large={large} actionLabel="Sign up" onClick={onSignUp} />;
};

export default SignUpButton;
