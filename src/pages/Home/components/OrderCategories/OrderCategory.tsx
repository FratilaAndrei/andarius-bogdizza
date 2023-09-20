import { FC } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type OrderCategoryProps = {
  key: number;
  image: string;
  label: string;
  className: string;
  link: string;
};

const OrderCategory: FC<OrderCategoryProps> = ({
  image,
  label,
  className,
  link,
}) => {
  return (
    <Link to={link} className={twMerge("relative overflow-hidden", className)}>
      <img
        src={image}
        alt={label}
        className="h-full w-full rounded-md object-cover object-center transition-all duration-700 hover:scale-125"
      />
      <div className="absolute bottom-4 left-4 text-5xl font-bold tracking-wide text-white">
        {label}
      </div>
    </Link>
  );
};

export default OrderCategory;
