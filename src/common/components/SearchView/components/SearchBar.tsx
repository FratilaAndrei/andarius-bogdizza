import React, { FC, Dispatch } from "react";
import { PRODUCTS } from "../../../data/constants";
import { ProductModel } from "../../../data/models";
import { useSearchParams } from "react-router-dom";

type SearchBarProps = {
  searchItem: string;
  onSearchItem: Dispatch<React.SetStateAction<string>>;
  onFilteredPizzaData: Dispatch<React.SetStateAction<ProductModel[]>>;
};

const SearchBar: FC<SearchBarProps> = ({
  searchItem,
  onSearchItem,
  onFilteredPizzaData,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e: React.FormEvent) => {
    e.preventDefault();

    const filteredData = PRODUCTS.filter(
      (item) =>
        item.title.toLowerCase().includes(searchItem.toLowerCase()) ||
        item.category.toLowerCase().includes(searchItem.toLowerCase()),
    );

    onFilteredPizzaData(filteredData);
  };

  const handleRedirect = (e: React.FormEvent) => {
    e.preventDefault();

    setSearchParams({ search: searchItem });
    onSearchItem("");
  };

  return (
    <div className="mb-8 mt-16 flex w-full flex-col items-center text-center text-zinc-700">
      <form
        className="w-full"
        onChange={handleChange}
        onSubmit={handleRedirect}
      >
        <input
          type="text"
          placeholder="Cautare produse.."
          className="h-12 w-full rounded-sm bg-zinc-200 pl-4 pr-10 text-center"
          value={searchItem}
          onChange={(e) => onSearchItem(e.target.value)}
        />
      </form>
      <p className="text-xs text-zinc-400">
        Scrieti si apasati Enter pentru a continua
      </p>
    </div>
  );
};

export default SearchBar;
