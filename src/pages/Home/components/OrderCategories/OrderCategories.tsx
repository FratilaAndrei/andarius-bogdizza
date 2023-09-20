import OrderCategoryDesserts from "../../../../utils/images/OrderCategoryDesert.jpg";
import OrderCategoryDrinks from "../../../../utils/images/OrderCategoryDrinks.jpg";
import OrderCategoryPizza from "../../../../utils/images/OrderCategoryPizza.jpg";
import OrderCategory from "./OrderCategory";

const OrderCategories = () => {
  const ORDER_CATEGORY_DATA = [
    {
      id: 1,
      image: OrderCategoryPizza,
      label: "Pizza noastra",
      link: "/categorie/pizza",
    },
    {
      id: 2,
      image: OrderCategoryDesserts,
      label: "Desert",
      link: "/categorie/desert",
    },
    {
      id: 3,
      image: OrderCategoryDrinks,
      label: "Bauturi",
      link: "/categorie/bauturi",
    },
  ];

  const getCategoryGridType = (id: number) => {
    if (id === 1) return "col-span-3 lg:row-span-1 lg:col-span-2 lg:row-span-2";
    else if (id === 2)
      return "col-span-3 lg:row-span-1 lg:col-span-2 lg:row-span-1";
    else return "col-span-3 lg:row-span-1 lg:grid-rows-1 lg:col-span-2";
  };

  const getOrderCategory = () => {
    return ORDER_CATEGORY_DATA.map((category) => (
      <OrderCategory
        label={category.label}
        image={category.image}
        className={`${getCategoryGridType(category.id)}`}
        link={category.link}
        key={category.id}
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
