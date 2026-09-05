export type ButtonProps = {
  variant?: "contained" | "outlined" | "text";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const { variant = "contained", children, ...restProps } = props;

  if (variant === "contained") {
    return (
      <button
        className={`px-2.5 py-1.5
        text-base text-black bg-[rgb(53,194,255)]
        border-2 border-transparent rounded-md
        hover:bg-[rgb(35,179,240)] hover:border-[rgb(35,179,240)]
        active:bg-[rgb(19,156,214)] active:border-[rgb(19,156,214)]
        transition-colors duration-300 cursor-pointer`}
        {...restProps}
      >
        {children}
      </button>
    );
  }

  if (variant === "outlined") {
    return (
      <button
        className={`px-2.5 py-1.5
        text-base text-[rgb(53,194,255)]
        border-2  border-[rgb(53,194,255)] rounded-md
        hover:bg-[rgba(53,194,255,0.1)] hover:border-[rgba(53,194,255,1)] 
        active:bg-[rgba(19,156,214,0.5)] active:border-[rgba(19,156,214,0.5)]
        transition-colors duration-300 cursor-pointer`}
        {...restProps}
      >
        {children}
      </button>
    );
  }

  if (variant === "text") {
    return (
      <button
        className={`px-2.5 py-1.5
        text-base text-[rgb(53,194,255)]
        border-2  border-transparent rounded-md
        hover:bg-[rgba(53,194,255,0.1)]
        active:bg-[rgba(19,156,214,0.5)] active:border-[rgba(19,156,214,0.5)]
        transition-colors duration-300 cursor-pointer`}
        {...restProps}
      >
        {children}
      </button>
    );
  }
};

export default Button;
