import { Dispatch, FC } from "react";
import { ProductModel } from "../../../data/models";
import EmptyShoppingCart from "./EmptyShoppingCart";
import ShoppingCartDivider from "./ShoppingCartDivider";
import ShoppingCartFooter from "./ShoppingCartFooter";
import ShoppingCartItem from "./ShoppingCartItem";

type ShoppingCartContentProps = {
  productsInCart: ProductModel[];
  setProductsInCart: Dispatch<React.SetStateAction<ProductModel[]>>;
  setDisplayShoppingCart: Dispatch<React.SetStateAction<boolean>>;
};
const ShoppingCartContent: FC<ShoppingCartContentProps> = ({
  productsInCart,
  setProductsInCart,
  setDisplayShoppingCart,
}) => {
  if (!productsInCart.length) return <EmptyShoppingCart />;

  console.log(setProductsInCart.length);

  return (
    <div className="flex h-screen w-full flex-col justify-between">
      <div>
        <ShoppingCartDivider />
        <div className="max-h-[70vh] overflow-y-scroll">
          {productsInCart.map((product) => (
            <ShoppingCartItem
              key={product.id}
              product={product}
              productsInCart={productsInCart}
              setProductsInCart={setProductsInCart}
            />
          ))}
        </div>
        <ShoppingCartDivider />
      </div>
      <div>
        <ShoppingCartDivider />
        <ShoppingCartFooter
          productsInCart={productsInCart}
          setDisplayShoppingCart={setDisplayShoppingCart}
        />
      </div>
    </div>
  );
};

export default ShoppingCartContent;
