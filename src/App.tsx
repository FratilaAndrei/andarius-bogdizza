import { useState } from "react";
import Badges from "./common/components/Badges/Badges";
import Navbar from "./common/components/Navbar/Navbar";
import RoutesProvider from "./common/components/Routes/RoutesProvider";
import ShoppingCart from "./common/components/ShoppingCart/ShoppingCart";

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
