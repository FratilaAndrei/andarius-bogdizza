import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./common/components/Navbar/Navbar";
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
  return (
    <div className=" text-zinc-100 min-h-screen">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
