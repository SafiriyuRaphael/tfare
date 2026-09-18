import type { LucideIcon } from "lucide-react";
import React from "react";

const Input = ({
  placeholder,
  type = "text",
  Icon,
  value,
  onChange,
}: {
  placeholder: string;
  type?: string;
  Icon?: LucideIcon;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => void;
}) => {
  return (
    <div className="border-b border-b-primary pb-2 flex gap-5 min-w-75 text-xl placeholder:text-white text-white items-center">
      {Icon && <Icon />}
      <input
        type={type}
        placeholder={placeholder}
        className="focus:outline-none"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
