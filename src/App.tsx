import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./common/components/Navbar";
import Blog from "./pages/Blog/Blog.page";
import Comanda from "./pages/Comanda/Comanda.page";
import Contact from "./pages/Contact/Contact.page";
import Despre from "./pages/Despre/Despre.page";
import HomePage from "./pages/Home/Home.page";
import Location from "./pages/Location/Location.page";
import NotFoundPage from "./pages/NotFound/NotFound.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/despre",
    element: <Despre />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/comanda",
    element: <Comanda />,
  },
  {
    path: "/locatii",
    element: <Location />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const App = () => {
  return (
    <div className=" text-zinc-100">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
