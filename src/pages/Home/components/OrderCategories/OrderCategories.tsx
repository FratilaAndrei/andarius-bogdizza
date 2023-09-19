import OrderCategoryDesserts from "../../../../utils/images/OrderCategoryDesert.jpg";
import OrderCategoryDrinks from "../../../../utils/images/OrderCategoryDrinks.jpg";
import OrderCategoryPizza from "../../../../utils/images/OrderCategoryPizza.jpg";
import OrderCategory from "./OrderCategory";

const OrderCategories = () => {
  const ORDER_CATEGORY_DATA = [
    {
      image: OrderCategoryPizza,
      label: "Pizza noastra",
      className: "col-span-3 lg:row-span-1 lg:col-span-2 lg:row-span-2",
      link: "/categorie/pizza",
    },
    {
      image: OrderCategoryDesserts,
      label: "Desert",
      className: "col-span-3 lg:row-span-1 lg:col-span-2 lg:row-span-1",
      link: "/categorie/desert",
    },
    {
      image: OrderCategoryDrinks,
      label: "Bauturi",
      className: "col-span-3 lg:row-span-1 lg:grid-rows-1 lg:col-span-2",
      link: "/categorie/bauturi",
    },
  ];

  const getOrderCategory = () => {
    return ORDER_CATEGORY_DATA.map((category) => (
      <OrderCategory
        label={category.label}
        image={category.image}
        className={category.className}
        link={category.link}
      />
    ));
  };

  return (
    <div className="mx-14 mt-20 grid h-[800px] grid-flow-col grid-rows-3 gap-10 text-black md:h-[600px] lg:h-[500px] lg:grid-rows-2 2xl:m-auto 2xl:mt-20 2xl:w-2/3">
      {getOrderCategory()}
    </div>
  );
};

export default OrderCategories;
