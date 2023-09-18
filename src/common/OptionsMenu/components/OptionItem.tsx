import { FC, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

type OptionItemProps = {
  title: string;
  reference: string;
  icon: ReactNode;
  label?: string;
  labelClassName?: string;
  dropdownIcon?: ReactNode;
  isDropdown?: boolean;
};

const OptionItem: FC<OptionItemProps> = ({
  title,
  icon,
  label,
  reference,
  dropdownIcon,
  isDropdown,
  labelClassName,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative h-full"
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`${
          isHovered && isDropdown ? "max-h-[200%] py-4" : "max-h-0 py-0"
        } text-black absolute transition-all overflow-hidden top-full bg-white w-max rounded-sm flex flex-col text-start justify-center px-8 gap-y-4 cursor-default`}
      >
        <p className="font-bold text-base font-sans ">Nu ai gasit ceva?</p>
        <a
          className="text-sm hover:text-zinc-300"
          href="https://www.youtube.com/watch?v=9fdqJhNbnSY"
        >
          Creeaza-ti propria pizza!
        </a>
      </div>
      <a
        href={reference}
        className="hover:text-black hover:opacity-100 transition duration-400 flex items-center text-[#61443e] text-xl cursor-pointer h-full"
      >
        <i className="text-3xl mr-2">{icon}</i>
        <div className="font-medium flex items-center">
          {title} {dropdownIcon}
        </div>
      </a>
      {label && (
        <div
          className={twMerge(
            "absolute -top-2 -right-1 bg-red-500 text-white px-2 rounded-md flex py-1 items-center",
            labelClassName
          )}
          style={{
            transform: isHovered
              ? "translate(0, -8px) rotate(-12deg)"
              : "translate(0) rotate(-12deg)",
            transition: "transform 0.3s ease",
          }}
        >
          <span className="italic text-xs font-bold">{label}</span>
        </div>
      )}
    </div>
  );
};

export default OptionItem;
