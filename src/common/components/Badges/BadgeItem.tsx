import { FC } from "react";
import { FaPhone } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { GrSearch } from "react-icons/gr";

type BadgeItemProps = {
  title?: string;
  telephoneNumber?: string;
  telephoneIcon?: string;
  personIcon?: string;
  favoriteIcon?: string;
  shoppingCartIcon?: string;
  searchIcon?: string;
};
const BadgeItem: FC<BadgeItemProps> = () => {
  const BADGE_DATA = [
    {
      title: "Comanda la Telefon",
      telephoneNumber: "0764 168 237 ",
      telephoneIcon: <FaPhone />,
    },
    {
      personIcon: <BsFillPersonFill className="" />,
      favoriteIcon: <FaRegHeart className="" />,
      shoppingIcon: <FiShoppingBag className="" />,
      searchIcon: <GrSearch className="" />,
    },
  ];

  const getBadge = () => {
    return BADGE_DATA.map((badge) => (
      <div className=" flex rounded-3xl bg-white px-4 py-0.5 text-black">
        {badge.title && (
          <div>
            {badge.title}
            <div className="flex items-center justify-center gap-x-2 font-bold">
              {badge.telephoneIcon} {badge.telephoneNumber}
            </div>
          </div>
        )}
        {badge.personIcon && (
          <div className="flex items-center justify-center gap-4 text-xl">
            <div>{badge.personIcon}</div>
            <div>{badge.favoriteIcon}</div>
            {/* // TODO Do a onclick Function where it updates the stateValue to */}
            <div>{badge.shoppingIcon}</div>
            <div>{badge.searchIcon}</div>
          </div>
        )}
      </div>
    ));
  };

  return <div className="m-auto flex justify-between px-20">{getBadge()}</div>;
};

export default BadgeItem;
