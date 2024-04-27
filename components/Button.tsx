interface Props {
  secondary?: boolean;
  large?: boolean;
  onClick?: () => void;
  actionLabel: string;
  disabled?: boolean;
  isSimple?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  fontSize?: number;
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
  fontSize,
}) => {
  if (secondary) {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={`bg-[white] text-[var(--main-color)] min-w-max border border-[var(--main-color)] rounded-2xl font-[600] text-lg ${
          large ? "h-[72px] px-8" : "h-14 px-6"
        } 
        ${fontSize ? `text-[${fontSize}px]` : "text-[30px]"}
        hover:bg-[var(--main-color)] hover:text-white duration-150 ease-in-out ${className}`}
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
        className={`bg-transparent min-w-max rounded-2xl text-[var(--gray-color)] font-[600]  text-lg  ${
          large ? "h-[72px] px-8" : "h-14 px-6"
        }
        
        ${fontSize ? `text-[${fontSize}px]` : "text-[30px]"}
         ${className} `}
      >
        <p></p>
        {actionLabel}
      </button>
    );
  } else {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={`bg-[var(--main-color)] min-w-max rounded-2xl text-white border border-[var(--main-color)] font-[600] text-lg  ${
          large ? "h-[72px] px-8" : "h-14 px-6"
        }
        
        ${fontSize ? `text-[${fontSize}px]` : "text-[30px]"}
        hover:bg-white hover:text-[var(--main-color)] duration-150 ease-in-out ${className}`}
      >
        {actionLabel}
      </button>
    );
  }
};

export default Button;
