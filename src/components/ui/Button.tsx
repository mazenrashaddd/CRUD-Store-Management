import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
  className?: string;
  width?: "w-fit" | "w-full"
}

const Button = ({ children, className, width = "w-full", ...rest }: IProps) => {
  return (
    <button className={`${className} ${width} rounded-md text-white font-bold p-1 cursor-pointer`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
