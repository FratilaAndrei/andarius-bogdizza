import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShoppingCart from "./common/components/ShoppingCart/ShoppingCart";
import HomePage from "./pages/Home/Home.page";
import NotFoundPage from "./pages/NotFound/NotFound.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const App = () => {
  const [displayShoppingCart, setDisplayShoppingCart] = useState(true);

  return (
    <div className="bg-zinc-800 text-zinc-100 min-h-screen">
      {displayShoppingCart && (
        <ShoppingCart setDisplayShoppingCart={setDisplayShoppingCart} />
      )}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
