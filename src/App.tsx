import { useState } from "react";
import Navbar from "./common/components/Navbar/Navbar";
import RoutesProvider from "./common/components/Routes/RoutesProvider";
import ShoppingCart from "./common/components/ShoppingCart/ShoppingCart";
import SearchView from "./common/components/SearchView/SearchView";

const App = () => {
  const [displayShoppingCart, setDisplayShoppingCart] = useState(false);
  const [displaySearchView, setDisplaySearchView] = useState(true);

  return (
    <div className="min-h-screen text-zinc-100">
      <Navbar />
      {displayShoppingCart && (
        <ShoppingCart setDisplayShoppingCart={setDisplayShoppingCart} />
      )}
      {displaySearchView && (
        <SearchView onDisplaySearchView={setDisplaySearchView} />
      )}
      <RoutesProvider />
    </div>
  );
};

export default App;
