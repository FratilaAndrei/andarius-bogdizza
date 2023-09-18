import { Dispatch, FC } from "react";
import { FiTrash2 } from "react-icons/fi";
import { ProductModel } from "../../../data/models";

type ShoppingCartItemProps = {
  product: ProductModel;
  productsInCart: ProductModel[];
  setProductsInCart: Dispatch<React.SetStateAction<ProductModel[]>>;
};
const ShoppingCartItem: FC<ShoppingCartItemProps> = ({
  product,
  productsInCart,
  setProductsInCart,
}) => {
  const deleteProduct = (id: string) => {
    const filteredProducts = productsInCart.filter(
      (product) => product.id !== id,
    );

    setProductsInCart(filteredProducts);
  };

  return (
    <div key={product.id} className="my-2 flex w-full items-center gap-x-3">
      <img
        src={product.image}
        alt={product.title}
        className="h-20 w-20 rounded-md object-cover shadow-sm"
      />
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div className="font-semibold text-zinc-700">{product.title}</div>
          <FiTrash2
            className="cursor-pointer text-2xl transition hover:text-red-500"
            onClick={() => deleteProduct(product.id)}
          />
        </div>
        <div className="mb-1 flex justify-between text-sm font-bold text-zinc-500 text-opacity-80">
          <div className="flex-1">Dimensiune:</div>
          <div className="flex-1">{product.size}</div>
        </div>
        <div className="font-bold text-red-400">
          {product.quantityInCart} x {product.price.toFixed(2)} lei
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
