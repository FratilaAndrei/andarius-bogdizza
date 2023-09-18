import { Dispatch, FC } from "react";
import { FiCreditCard, FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ProductModel } from "../../../data/models";
import { CART_PAGE_ROUTE } from "../../../data/routes";

type ShoppingCartFooterProps = {
  productsInCart: ProductModel[];
  setDisplayShoppingCart: Dispatch<React.SetStateAction<boolean>>;
};
const ShoppingCartFooter: FC<ShoppingCartFooterProps> = ({
  productsInCart,
  setDisplayShoppingCart,
}) => {
  const getTotalPrice = () => {
    let totalPrice = 0;

    productsInCart.forEach((product) => {
      if (!product.quantityInCart)
        throw new Error("Can't have no quantity while in cart");

      totalPrice += product.quantityInCart * product.price;
    });

    return totalPrice.toFixed(2);
  };

  const hideShoppingCart = () => {
    setDisplayShoppingCart(false);
  };

  return (
    <>
      <div className="my-6 flex w-full items-center justify-between px-12 text-xl font-semibold">
        <div className="text-zinc-500">Sub-total:</div>
        <div>{getTotalPrice()} lei</div>
      </div>
      <div className="flex w-full items-center justify-center gap-x-6 font-semibold uppercase text-zinc-100">
        <div className="justifty-center flex w-1/2 cursor-pointer items-center rounded-full bg-zinc-800 py-2.5 text-center shadow-md transition-all hover:scale-105 hover:shadow-lg">
          <Link
            to={CART_PAGE_ROUTE}
            onClick={hideShoppingCart}
            className="mx-auto flex items-center gap-x-3"
          >
            <FiShoppingBag className="text-2xl" /> Vezi coșul
          </Link>
        </div>
        <div className="justifty-center flex w-1/2 cursor-pointer items-center rounded-full bg-red-500 bg-opacity-80 py-2.5 text-center shadow-md transition-all hover:scale-105 hover:shadow-lg">
          <div className="mx-auto flex items-center gap-x-3">
            <FiCreditCard className="text-2xl" /> Finalizare
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartFooter;
