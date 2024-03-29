import { Route, Routes } from "react-router-dom";
import AboutPage from "../../../pages/About/About.page";
import BlogPage from "../../../pages/Blog/Blog.page";
import CategoryDesserts from "../../../pages/Categories/CategoryDesserts.page";
import CategoryDrinks from "../../../pages/Categories/CategoryDrinks.page";
import CategoryPizza from "../../../pages/Categories/CategoryPizza.page";
import OrderPage from "../../../pages/Comanda/Order.page";
import ContactPage from "../../../pages/Contact/Contact.page";
import HomePage from "../../../pages/Home/Home.page";
import LocationPage from "../../../pages/Location/Location.page";
import NotFoundPage from "../../../pages/NotFound/NotFound.page";
import {
  ABOUT_PAGE_ROUTE,
  BLOG_PAGE_ROUTE,
  CATEGORY_DESSERTS_ROUTE,
  CATEGORY_DRINKS_ROUTE,
  CATEGORY_PIZZA_ROUTE,
  CONTACT_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  LOCATIONS_PAGE_ROUTE,
  ORDER_PAGE_ROUTE,
} from "../../data/routes";

const RoutesProvider = () => {
  return (
    <Routes>
      <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
      <Route path={ABOUT_PAGE_ROUTE} element={<AboutPage />} />
      <Route path={BLOG_PAGE_ROUTE} element={<BlogPage />} />
      <Route path={ORDER_PAGE_ROUTE} element={<OrderPage />} />
      <Route path={LOCATIONS_PAGE_ROUTE} element={<LocationPage />} />
      <Route path={CONTACT_PAGE_ROUTE} element={<ContactPage />} />
      <Route path={CATEGORY_PIZZA_ROUTE} element={<CategoryPizza />} />
      <Route path={CATEGORY_DESSERTS_ROUTE} element={<CategoryDesserts />} />
      <Route path={CATEGORY_DRINKS_ROUTE} element={<CategoryDrinks />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RoutesProvider;
