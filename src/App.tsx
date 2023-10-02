import { useState } from "react";
import Navbar from "./common/components/Navbar/Navbar";
import RoutesProvider from "./common/components/Routes/RoutesProvider";
import ShoppingCart from "./common/components/ShoppingCart/ShoppingCart";
import Badges from "./common/components/Badges/Badges";

const App = () => {
  const [displayShoppingCart, setDisplayShoppingCart] = useState(false);

  return (
    <div className="min-h-screen text-zinc-100">
      <Navbar />
      <Badges setDisplayShoppingCart={setDisplayShoppingCart} />
      {displayShoppingCart && (
        <ShoppingCart setDisplayShoppingCart={setDisplayShoppingCart} />
      )}
      <RoutesProvider />
    </div>
  );
};

export default App;
