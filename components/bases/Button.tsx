import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const { children, ...restProps } = props;
  return <button {...restProps}>{children}</button>;
};

export default Button;
