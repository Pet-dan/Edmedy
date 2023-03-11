import React, { FC } from "react";

interface InputProps {
  type: string;
  name: string;
  value: any;
  onChange: any;
  placeholder: string;
  max?: number;
}
const Input: FC<InputProps> = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  max,
}) => {
  return (
    <input
      className="input-field"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      max={max}
      required
    />
  );
};

export default Input;
