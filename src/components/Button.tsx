import type { LucideIcon } from "lucide-react";

const Button = ({
  label,
  IconRight,
  IconLeft,
  onClick,
  variant,
}: {
  label: string;
  IconRight?: LucideIcon;
  onClick: () => void;
  IconLeft?: LucideIcon;
  variant: "primary" | "secondary" | "tertiary" | "error";
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center cursor-pointer transition-all duration-500 hover:-translate-y-1.5 font-bold  drop-shadow-xl hover:drop-shadow-black/50 text-lg justify-center gap-2 px-4 py-2 rounded ${variant === "primary" ? "bg-[#CEBEBE]" : variant === "secondary" ? "bg-[#372549] text-white" : variant === "tertiary" ? "bg-[#1A1423]" : "bg-[#AC3931]"}`}
    >
      {IconLeft && <span>{<IconLeft />}</span>}
      {label}
      {IconRight && <span>{<IconRight />}</span>}
    </button>
  );
};

export default Button;
