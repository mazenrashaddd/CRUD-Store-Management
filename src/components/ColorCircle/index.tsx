import {HTMLAttributes} from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement>  {
    color: string
}

const ColorCircle = ({color, ...rest}: IProps) => {
  return (
    <span className="w-5 h-5 rounded-full inline-block border-1 border-b-gray-900 cursor-pointer me-2" style={{backgroundColor: color}} {...rest}/>
  );
};

export default ColorCircle;
