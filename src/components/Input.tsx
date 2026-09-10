import type { LucideIcon } from "lucide-react";
import React from "react";

const Input = ({
  placeholder,
  type = "text",
  Icon,
}: {
  placeholder: string;
  type?: string;
  Icon?: LucideIcon;
}) => {
  return (
    <div className="border-b border-b-primary pb-2 flex gap-5 min-w-75 text-xl placeholder:text-white text-white items-center">
      {Icon && <Icon />}
      <input
        type={type}
        placeholder={placeholder}
        className="focus:outline-none"
      />
    </div>
  );
};

export default Input;
