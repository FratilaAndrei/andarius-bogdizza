import { Dispatch, FC, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PRODUCTS } from "../../data/constants";
import { ProductModel } from "../../data/models";
import ShoppingCartContent from "./components/ShoppingCartContent";

type ShoppingCartProps = {
  setDisplayShoppingCart: Dispatch<React.SetStateAction<boolean>>;
};
const ShoppingCart: FC<ShoppingCartProps> = ({ setDisplayShoppingCart }) => {
  const [productsInCart, setProductsInCart] = useState<ProductModel[]>(
    PRODUCTS.filter((product) => product.quantityInCart),
  );

  const handleHideShoppingCart = () => {
    setDisplayShoppingCart(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex h-screen w-screen items-center bg-zinc-100 text-zinc-600">
      <div className="mx-auto flex h-[90vh] w-full max-w-screen-sm flex-col items-center">
        <AiOutlineClose
          className="fixed right-2 top-2 cursor-pointer text-5xl text-zinc-400 transition hover:scale-105 hover:text-zinc-600"
          onClick={handleHideShoppingCart}
        />
        <ShoppingCartContent
          productsInCart={productsInCart}
          setProductsInCart={setProductsInCart}
          setDisplayShoppingCart={setDisplayShoppingCart}
        />
      </div>
    </div>
  );
};

export default ShoppingCart;
