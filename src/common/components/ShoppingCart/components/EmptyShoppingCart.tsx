import { FiShoppingBag } from "react-icons/fi";

const EmptyShoppingCart = () => {
  return (
    <>
      <div>
        <FiShoppingBag className="mx-auto mb-6 text-9xl text-zinc-200" />
        <div className="text-xl font-medium text-zinc-500">
          Niciun produs în coș
        </div>
      </div>
    </>
  );
};

export default EmptyShoppingCart;
