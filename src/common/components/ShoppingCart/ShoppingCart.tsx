import { Dispatch, FC, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import EmptyShoppingCart from "../EmptyShoppingCart";

type ShoppingCartProps = {
  setDisplayShoppingCart: Dispatch<React.SetStateAction<boolean>>;
};
const ShoppingCart: FC<ShoppingCartProps> = ({ setDisplayShoppingCart }) => {
  const PRODUCTS_IN_CART = [
    {
      id: "1",
      image:
        "https://properpizza.ro/sibiu/wp-content/uploads/2019/03/Proper-Pizza-Pasta-Margherita-00.jpg",
      title: "Margherita",
      size: "medie",
      price: "30.00",
    },
    {
      id: "2",
      image:
        "https://properpizza.ro/sibiu/wp-content/uploads/2020/03/Proper-Pizza-Pasta-Chicken-BBQ-00.jpg",
      title: "Polo",
      size: "family",
      price: "70.00",
    },
  ];
  const [productsInCart, setProductsInCart] = useState(PRODUCTS_IN_CART);

  const deleteProduct = (id: string) => {
    const filteredProducts = productsInCart.filter(
      (product) => product.id !== id,
    );

    setProductsInCart(filteredProducts);
  };

  return (
    <div className="fixed inset-0 z-50 flex h-screen w-screen items-center bg-zinc-100 text-zinc-600">
      <div className="mx-auto flex h-[90vh] w-full max-w-screen-md flex-col items-center">
        <AiOutlineClose
          className="fixed right-2 top-2 cursor-pointer text-5xl text-zinc-400 transition hover:scale-105 hover:text-zinc-600"
          onClick={() => setDisplayShoppingCart(false)}
        />
        {productsInCart.length ? (
          <>
            <div className="my-2 h-0.5 w-full rounded-full bg-zinc-200 bg-opacity-75"></div>
            {productsInCart.map((product) => (
              <div
                key={product.id}
                className="my-2 flex w-full items-center gap-x-3"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-20 w-20 rounded-sm object-cover shadow-sm"
                />
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-zinc-700">
                      {product.title}
                    </div>
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
                    1 x {product.price} lei
                  </div>
                </div>
              </div>
            ))}
            <div className="my-2 h-0.5 w-full rounded-full bg-zinc-200 bg-opacity-75"></div>
          </>
        ) : (
          <EmptyShoppingCart />
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
