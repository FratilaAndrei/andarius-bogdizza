import OptionItem from "./components/OptionItem";

//* Icon imports
import { BsCupStraw } from "react-icons/bs";
import { CiBowlNoodles } from "react-icons/ci";
import {
  GiCakeSlice,
  GiFullPizza,
  GiHamburger,
  GiKnifeFork,
  GiSaucepan,
} from "react-icons/gi";
import { MdOutlineFastfood } from "react-icons/md";
const OPTIONS = [
  {
    title: "Pizza",
    icon: <GiFullPizza />,
    isDropdown: true,
    label: "TOP",
    reference: "https://www.youtube.com/watch?v=2-vA5yLWBHg&t=14s",
  },
  {
    title: "Meniu Oferte",
    icon: <MdOutlineFastfood />,
    label: "REDUCERE",
    labelClassName: "bg-lime-500",
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
    <div className="bg-yellow-400 flex items-center h-16 w-[75vw] mx-auto justify-center gap-8 rounded-xl top-8 relative text-zinc-800">
      {OPTIONS.map((op) => (
        <OptionItem {...op} key={op.title} />
      ))}
    </div>
  );
};

export default OptionMenu;
