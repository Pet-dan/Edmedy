import React, { FC } from "react";

interface InputProps {
  type: string;
  name: string;
  value: any;
  onChange: any;
  placeholder: string;
}
const Input: FC<InputProps> = ({
  type,
  name,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <input
      className="input-field"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required
    />
  );
};

export default Input;
