interface Props {
  secondary?: boolean;
  large?: boolean;
  onClick?: () => void;
  actionLabel: string;
  disabled?: boolean;
  isSimple?: boolean;
}

const Button: React.FC<Props> = ({
  secondary = false,
  large,
  onClick,
  actionLabel,
  disabled,
  isSimple = false,
}) => {
  if (secondary) {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={`bg-[white] text-[var(--main-color)] border border-[var(--main-color)] rounded-2xl font-[600] text-lg ${
          large ? "h-16 px-6 text-[30px]" : "h-14 px-4"
        } hover:bg-[var(--main-color)] hover:text-white duration-150 ease-in-out`}
      >
        {actionLabel}
      </button>
    );
  } else if (isSimple) {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={`bg-transparent rounded-2xl text-[var(--gray-color)] font-[600]  text-lg  ${
          large ? "h-16 px-6 text-[30px]" : "h-14 px-4"
        } `}
      >
        {actionLabel}
      </button>
    );
  } else {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={`bg-[var(--main-color)] rounded-2xl text-white border border-[var(--main-color)] font-[600] text-lg  ${
          large ? "h-16 px-6 text-[30px]" : "h-14 px-4"
        } hover:bg-white hover:text-[var(--main-color)] duration-150 ease-in-out`}
      >
        {actionLabel}
      </button>
    );
  }
};

export default Button;
