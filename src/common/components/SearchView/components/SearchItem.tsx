import { FC } from "react";
import { Link } from "react-router-dom";

type SearchItemProps = {
  title: string;
  ingredients?: string;
  image: string;
  category: string;
};

const SearchItem: FC<SearchItemProps> = ({
  title,
  ingredients,
  image,
  category,
}) => {
  return (
    <>
      <Link className="cursor-pointer" to={`${category}/${title}`}>
        <div className="mx-auto my-4 flex gap-3 text-xs">
          <img src={image} className="h-12 w-12 rounded-sm"></img>
          <div className="flex flex-col text-zinc-700">
            <p className="font-medium">{title}</p>
            <p className="line-clamp-2">{ingredients}</p>
          </div>
        </div>
      </Link>
      <hr className="text-zinc-300" />
    </>
  );
};

export default SearchItem;
