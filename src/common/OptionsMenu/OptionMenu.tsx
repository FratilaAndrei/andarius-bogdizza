import React from "react";
import OptionItem from "./components/OptionItem";

//* Icon imports
import { MdOutlineFastfood } from "react-icons/md";
import { BsCupStraw } from "react-icons/bs";
import { CiBowlNoodles } from "react-icons/ci";
import {
  GiKnifeFork,
  GiSaucepan,
  GiHamburger,
  GiCakeSlice,
  GiFullPizza,
} from "react-icons/gi";

const options = [
  {
    title: "Pizza",
    icon: <GiFullPizza />,
    label: "TOP",
    reference: "https://www.youtube.com/watch?v=2-vA5yLWBHg&t=14s",
  },
  {
    title: "Meniu Oferte",
    icon: <MdOutlineFastfood />,
    label: "REDUCERE",
    reference: "https://www.youtube.com/watch?v=2-vA5yLWBHg&t=14s",
  },
  {
    title: "Bauturi",
    icon: <BsCupStraw />,
    reference: "https://www.youtube.com/watch?v=2-vA5yLWBHg&t=14s",
  },
  {
    title: "Starter",
    icon: <GiHamburger />,
    reference: "https://www.youtube.com/watch?v=2-vA5yLWBHg&t=14s",
  },
  {
    title: "Paste",
    icon: <CiBowlNoodles />,
    reference: "https://www.youtube.com/watch?v=2-vA5yLWBHg&t=14s",
  },
  {
    title: "Desert",
    icon: <GiCakeSlice />,
    reference: "https://www.youtube.com/watch?v=2-vA5yLWBHg&t=14s",
  },
  {
    title: "Aperitive",
    icon: <GiKnifeFork />,
    reference: "https://www.youtube.com/watch?v=2-vA5yLWBHg&t=14s",
  },
  {
    title: "Sosuri",
    icon: <GiSaucepan />,
    reference: "https://www.youtube.com/watch?v=2-vA5yLWBHg&t=14s",
  },
];

const OptionMenu = () => {
  return (
    <div className="bg-yellow-400 flex items-center h-16 mx-40 justify-center gap-10 rounded-xl top-8 relative text-zinc-800 ">
      {options.map((op) => (
        <OptionItem
          title={op.title}
          icon={op.icon}
          label={op.label}
          reference={op.reference}
        />
      ))}
    </div>
  );
};

export default OptionMenu;
