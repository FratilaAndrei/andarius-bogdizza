import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
  return (
    <div className="bg-zinc-800 text-zinc-100 min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
