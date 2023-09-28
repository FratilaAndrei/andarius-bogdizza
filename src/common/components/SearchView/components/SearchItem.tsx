import { FC } from "react";

type SearchItemProps = {
  title: string;
  ingredients?: string;
  image: string;
  category: string;
};

//TODO: Change the anchor to Link

const SearchItem: FC<SearchItemProps> = ({ title, ingredients, image }) => {
  return (
    <>
      <a className="cursor-pointer" href="#">
        <div className="mx-auto my-4 flex gap-3 text-xs">
          <img src={image} className="h-12 w-12 rounded-sm"></img>
          <div className="flex flex-col text-zinc-700">
            <p className="font-medium">{title}</p>
            <p className="line-clamp-2">{ingredients}</p>
          </div>
        </div>
      </a>
      <hr className="text-zinc-300" />
    </>
  );
};

export default SearchItem;
