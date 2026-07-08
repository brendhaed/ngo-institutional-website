import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "solid" | "transparent";
  icon?: ReactNode;
};

export default function Button({
  children,
  variant = "solid",
  icon, 
}: ButtonProps) {
  const variants = {
    solid:
      "bg-linear-to-r from-[#4AA35E] to-[#1BB722] px-6 py-3 text-white",
    transparent:
      "bg-transparent border-2 border-[#4AA35E] px-6 py-3 text-[#4AA35E]",
  };

  return (
    <button
      className={`inline-flex items-center gap-2 rounded-sm font-semibold text-sm cursor-pointer lg:text-base ${variants[variant]}`}
    >
      <span>{children}</span>
      {icon}
    </button>
  );
}