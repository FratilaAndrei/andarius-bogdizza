import { Dispatch, FC } from "react";

type BadgeItemProps = {
  title?: string;
  telephoneNumber?: string;
  telephoneIcon?: React.ReactNode;
  personIcon?: React.ReactNode;
  favoriteIcon?: React.ReactNode;
  shoppingCartIcon?: React.ReactNode;
  searchIcon?: React.ReactNode;
  setDisplayShoppingCart: Dispatch<React.SetStateAction<boolean>>;
};

const BadgeItem: FC<BadgeItemProps> = ({
  title,
  telephoneIcon,
  telephoneNumber,
  personIcon,
  favoriteIcon,
  shoppingCartIcon,
  searchIcon,
  setDisplayShoppingCart,
}) => {
  const handleShoppingCart = () => {
    setDisplayShoppingCart(true);
  };

  return (
    <div className=" flex rounded-3xl bg-white px-4 py-0.5 text-black">
      {title && (
        <div>
          {title}
          <div className="flex items-center justify-center gap-x-2 font-bold">
            {telephoneIcon} {telephoneNumber}
          </div>
        </div>
      )}
      {personIcon && (
        <div className="flex items-center justify-center gap-4 text-xl">
          <div className="cursor-pointer p-1 hover:scale-125 hover:rounded-full hover:bg-logoColor">
            {personIcon}
          </div>
          {favoriteIcon && (
            <div className="relative cursor-pointer p-1 hover:scale-125 hover:rounded-full hover:bg-logoColor">
              {favoriteIcon}
              <div className="absolute -right-1 top-0 -translate-y-1/2 translate-x-1/2 rounded-full bg-black px-1 text-sm text-white">
                0
              </div>
            </div>
          )}
          {shoppingCartIcon && (
            <div
              className="relative cursor-pointer p-1 hover:scale-125 hover:rounded-full hover:bg-logoColor"
              onClick={handleShoppingCart}
            >
              {shoppingCartIcon}
              <div className="absolute -right-1 top-0 -translate-y-1/2 translate-x-1/2 rounded-full bg-black px-1 text-sm text-white">
                0
              </div>
            </div>
          )}
          {searchIcon && (
            <div className="cursor-pointer p-1 hover:scale-125 hover:rounded-full hover:bg-logoColor">
              {searchIcon}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BadgeItem;
