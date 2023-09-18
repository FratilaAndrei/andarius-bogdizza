import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./common/components/Navbar/Navbar";
import ShoppingCart from "./common/components/ShoppingCart/ShoppingCart";
import AboutPage from "./pages/About/About.page";
import BlogPage from "./pages/Blog/Blog.page";
import OrderPage from "./pages/Comanda/Order.page";
import ContactPage from "./pages/Contact/Contact.page";
import HomePage from "./pages/Home/Home.page";
import LocationPage from "./pages/Location/Location.page";
import NotFoundPage from "./pages/NotFound/NotFound.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/despre",
    element: <AboutPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/comanda",
    element: <OrderPage />,
  },
  {
    path: "/locatii",
    element: <LocationPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const App = () => {
  const [displayShoppingCart, setDisplayShoppingCart] = useState(true);

  return (
    <div className=" min-h-screen text-zinc-100">
      <Navbar />
      <RouterProvider router={router} />
      {displayShoppingCart && (
        <ShoppingCart setDisplayShoppingCart={setDisplayShoppingCart} />
      )}
    </div>
  );
};

export default App;
