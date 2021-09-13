import React from "react";

interface IProps {
  label?: string;
  placeholder?: string;
  value: string;
  changeVal: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  name: string;
  type: string;
  formContainerStyle?: string;
}

const Input: React.FC<IProps> = ({
  label,
  placeholder,
  value,
  changeVal,
  error,
  name,
  type,
  formContainerStyle,
}) => {
  return (
    <div className={`mt-2 ${formContainerStyle} w-full`}>
      {label && <label className="font-medium">{label}</label>}
      <input
        className="block border-2 px-4 py-1 w-full mt-2 "
        name={name}
        value={value}
        onChange={changeVal}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
