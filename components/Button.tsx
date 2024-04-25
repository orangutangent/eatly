interface Props {
  secondary?: boolean;
  large?: boolean;
  onClick?: () => void;
  actionLabel: string;
  disabled?: boolean;
  isSimple?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
}

const Button: React.FC<Props> = ({
  secondary = false,
  large,
  onClick,
  actionLabel,
  disabled,
  isSimple = false,
  type = "button",
  className = "",
}) => {
  if (secondary) {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={`bg-[white] text-[var(--main-color)] w-full border border-[var(--main-color)] rounded-2xl font-[600] text-lg ${
          large ? "h-[72px] px-8 text-[30px]" : "h-14 px-6"
        } hover:bg-[var(--main-color)] hover:text-white duration-150 ease-in-out ${className}`}
      >
        {actionLabel}
      </button>
    );
  } else if (isSimple) {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={`bg-transparent w-full rounded-2xl text-[var(--gray-color)] font-[600]  text-lg  ${
          large ? "h-[72px] px-8 text-[30px]" : "h-14 px-6"
        } ${className} `}
      >
        {actionLabel}
      </button>
    );
  } else {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={`bg-[var(--main-color)] w-full rounded-2xl text-white border border-[var(--main-color)] font-[600] text-lg  ${
          large ? "h-[72px] px-8 text-[30px]" : "h-14 px-6"
        } hover:bg-white hover:text-[var(--main-color)] duration-150 ease-in-out ${className}`}
      >
        {actionLabel}
      </button>
    );
  }
};

export default Button;
