import React from "react";

interface IProps {
  children: React.ReactNode;
  clicked?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  btnStyle?: object;
  type?: "button";
}

const Button: React.FC<IProps> = ({ children, clicked, btnStyle, type }) => {
  return (
    <button
      type={type}
      style={btnStyle}
      className={` bg-red-400 w-full px-4 py-2 mt-4 text-white`}
      onClick={clicked}
    >
      {children}
    </button>
  );
};

export default Button;
