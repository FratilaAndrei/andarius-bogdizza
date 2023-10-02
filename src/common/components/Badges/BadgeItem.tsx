import { Dispatch, FC } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../data/constants";
import BadgeIcon from "./BadgeIcon";
import { GrSearch } from "react-icons/gr";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

type BadgeItemProps = {
  title?: string;
  telephoneNumber?: string;
  telephoneIcon?: React.ReactNode;
  personIcon?: React.ReactNode;
  setDisplayShoppingCart: Dispatch<React.SetStateAction<boolean>>;
};

const BadgeItem: FC<BadgeItemProps> = ({
  title,
  telephoneIcon,
  telephoneNumber,
  personIcon,
  setDisplayShoppingCart,
}) => {
  const handleShoppingCart = () => {
    setDisplayShoppingCart(true);
  };

  const totalQuantityInCart = PRODUCTS.reduce(
    (total, product) =>
      product.quantityInCart ? total + product.quantityInCart : total,
    0,
  );

  return (
    <div className="flex rounded-3xl bg-white px-4 py-0.5 text-black drop-shadow-2xl">
      {title && (
        <Link to="tel:0764 168 237">
          {title}
          <div className="flex items-center justify-center gap-x-2 font-bold">
            {telephoneIcon} {telephoneNumber}
          </div>
        </Link>
      )}
      {personIcon && (
        <div className="flex items-center justify-center gap-4 text-xl">
          <BadgeIcon icon={<BsFillPersonFill />} />
          <BadgeIcon icon={<FaRegHeart />} />
          <BadgeIcon icon={<FiShoppingBag />} onClick={handleShoppingCart}>
            {totalQuantityInCart}
          </BadgeIcon>
          <BadgeIcon icon={<GrSearch />} />
        </div>
      )}
    </div>
  );
};

export default BadgeItem;
