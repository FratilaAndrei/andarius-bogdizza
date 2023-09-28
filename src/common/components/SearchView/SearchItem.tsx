import { FC } from "react";

type SearchItemProps = {
  title: string;
  ingredients: string;
  image: string;
};

const SearchItem: FC<SearchItemProps> = ({ title, ingredients, image }) => {
  return (
    <div>
      <img src={image}></img>
      <h4>{title}</h4>
      <p>{ingredients}</p>
    </div>
  );
};

export default SearchItem;
