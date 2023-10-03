import { Dispatch, FC, useState } from "react";
import SearchItem from "./components/SearchItem";
import SearchBar from "./components/SearchBar";
import { AiOutlineClose } from "react-icons/ai";
import { PRODUCTS } from "../../data/constants";
import { Link } from "react-router-dom";

type SearchViewProps = {
  onDisplaySearchView: Dispatch<React.SetStateAction<boolean>>;
};

const SearchView: FC<SearchViewProps> = ({ onDisplaySearchView }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredPizzaData, setFilteredPizzaData] = useState(PRODUCTS);

  const handleToggleSearchView = () => {
    onDisplaySearchView(false);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex h-screen w-screen flex-col items-center bg-zinc-100">
        <AiOutlineClose
          className="fixed right-2 top-2 cursor-pointer text-5xl text-zinc-400 transition hover:scale-105 hover:text-zinc-600"
          onClick={handleToggleSearchView}
        />
        <div className="flex w-[40vw] min-w-[300px] flex-col">
          <SearchBar
            searchItem={searchItem}
            onSearchItem={setSearchItem}
            onFilteredPizzaData={setFilteredPizzaData}
          />
          {searchItem && (
            <>
              <div className="mb-4 rounded-sm border-2 border-zinc-200 bg-[#fafafa] p-2 font-bold text-black">
                Produse
              </div>
              <div>
                {filteredPizzaData.map((item) => (
                  <SearchItem {...item} key={item.title} />
                ))}
              </div>
              <Link
                className="mt-2 w-[35%] rounded-2xl bg-red-400 p-1 text-center text-sm font-medium text-white transition hover:scale-105 hover:bg-white hover:text-zinc-600"
                to="/produse"
              >
                Vezi toate produsele
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchView;
