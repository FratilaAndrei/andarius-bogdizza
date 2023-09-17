import React, { ReactNode, useState } from "react";
import { FC } from "react";

type OptionItemProps = {
  title: string;
  icon: ReactNode;
  label?: string;
  reference: string;
};

//! Bogdan HELP in plm!!!
//? Dropdown for Pizza needs to have a dropdown-like transition

const OptionItem: FC<OptionItemProps> = ({ title, icon, label, reference }) => {
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
      {isHovered && label === "TOP" && (
        <div className="text-black absolute top-full bg-white w-72 rounded-sm flex flex-col text-start justify-center pl-10 gap-5 cursor-default animate-heightTransition ">
          <p className="font-bold text-base font-sans">Nu ai gasit ceva?</p>
          <a
            className="text-sm hover:text-zinc-300"
            href="https://www.youtube.com/watch?v=9fdqJhNbnSY"
          >
            Creeaza-ti propria pizza!
          </a>
        </div>
      )}
      <a
        href={reference}
        className="hover:text-black hover:opacity-100 transition duration-400 flex items-center text-[#61443e] text-xl cursor-pointer h-full"
      >
        <i className="text-3xl mr-2">{icon}</i>
        <div className="font-medium">{title}</div>
      </a>
      {label === "TOP" && (
        <div
          className="absolute -top-2 -right-6 bg-red-500 text-white px-2 rounded-md flex py-1 items-center"
          style={{
            transform: isHovered
              ? "translate(0, -8px) rotate(-12deg)"
              : "translate(0) rotate(-12deg)",
            transition: "transform 0.3s ease",
          }}
        >
          <span className="italic text-[10px] font-bold">{label}</span>
        </div>
      )}
      {label === "REDUCERE" && (
        <div
          className="absolute -top-3 -right-8 bg-lime-500 text-white px-2 rounded-md flex py-1 items-center"
          style={{
            transform: isHovered
              ? "translate(0, -6px) rotate(-12deg)"
              : "translate(0) rotate(-12deg)",
            transition: "transform 0.3s ease",
          }}
        >
          <span className="italic text-[10px] font-bold ">{label}</span>
        </div>
      )}
    </div>
  );
};

export default OptionItem;
