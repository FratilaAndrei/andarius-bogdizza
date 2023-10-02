import { FC } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaPhone, FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { GrSearch } from "react-icons/gr";
import BadgeItem from "./BadgeItem";

type BadgesProps = {
  setDisplayShoppingCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Badges: FC<BadgesProps> = ({ setDisplayShoppingCart }) => {
  const BADGE_DATA = [
    {
      id: "0",
      title: "Comanda la Telefon",
      telephoneNumber: "0764 168 237",
      telephoneIcon: <FaPhone />,
    },
    {
      id: "1",
      personIcon: <BsFillPersonFill />,
      favoriteIcon: <FaRegHeart />,
      shoppingCartIcon: <FiShoppingBag />,
      searchIcon: <GrSearch />,
    },
  ];

  return (
    <div className="fixed top-28 z-50 flex w-full justify-around ">
      {BADGE_DATA.map((badge) => (
        <BadgeItem
          key={badge.id}
          {...badge}
          setDisplayShoppingCart={setDisplayShoppingCart}
        />
      ))}
    </div>
  );
};

export default Badges;
