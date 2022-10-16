import React from "react";

interface InputComponentProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent = ({ value, onChange }: InputComponentProps) => {
  return (
    <input
      placeholder="Search..."
      value={value}
      onChange={onChange}
    />
  );
};

export default InputComponent;
