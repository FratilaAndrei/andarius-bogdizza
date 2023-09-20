import { FC, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";

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
        } absolute top-full flex w-max cursor-default flex-col justify-center gap-y-4 overflow-hidden rounded-sm bg-white px-8 text-start text-black transition-all`}
      >
        <p className="font-sans text-base font-bold ">Nu ai gasit ceva?</p>
        <Link
          className="text-sm hover:text-zinc-300"
          to="https://www.youtube.com/watch?v=9fdqJhNbnSY"
        >
          Creeaza-ti propria pizza!
        </Link>
      </div>
      <Link
        to={reference}
        className="duration-400 flex h-full cursor-pointer items-center text-xl text-[#61443e] transition hover:text-black "
      >
        <i className="mr-2 text-3xl">{icon}</i>
        <div className="flex items-center text-lg font-medium">
          {title} {isDropdown && <BiChevronDown />}
        </div>
      </Link>
      {label && (
        <div
          className={twMerge(
            "absolute -right-3 -top-2 flex items-center rounded-md bg-red-500 px-2 py-1 text-white",
            labelClassName,
          )}
          style={{
            transform: isHovered
              ? "translate(0, -8px) rotate(-12deg)"
              : "translate(0) rotate(-12deg)",
            transition: "transform 0.3s ease",
          }}
        >
          <span className="text-xs font-bold italic">{label}</span>
        </div>
      )}
    </div>
  );
};

export default OptionItem;
