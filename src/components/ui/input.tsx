import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: IProps) => {
  return (
    <input
      className="border-2 border-gray-300 rounded-md shadow-md focus:border-indigo-500 focus: outline-none focus:ring-1 focus: ring-indigo-500 px-3 py-2 text-md"
      {...rest}
    />
  );
};

export default Input;
