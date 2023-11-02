import React, { useState } from "react";
import toast from "react-hot-toast";

const SearchItem = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() === "") {
      toast.error("Please type something in the search input field");
    } else {
      onSearch(query);
    }
  };

  return (
    <>
      <div className="dark:bg-violet-400 bg-violet-400">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
          <h1 className="text-2xl font-bold sm:text-5xl xl:max-w-2xl dark:text-gray-900">
            Find the latest news and interesting information here!
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
            Empowering Minds Through Information
          </p>

          <div className="flex items-center justify-center relative">
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Article"
              required
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg font-semibold rounded-xl dark:bg-gray-800 bg-gray-800 text-gray-50 dark:text-gray-50"
              onClick={handleSearch}
              //   disabled={!query}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchItem;
