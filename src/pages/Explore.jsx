import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Card from "../component/Card";
import Footer from "../component/Footer";
import getArticles from "../service/api";
import SearchItem from "../component/SearchItem";

const Explore = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((data) => {
      setSearchResults(data);
      setIsLoading(false);
    });
  }, []);

  const handleSearch = (searchQuery) => {
    setIsLoading(true);
    getArticles(searchQuery).then((data) => {
      setSearchResults(data);
      setIsLoading(false);
    });
    setQuery(searchQuery);
  };

  return (
    <>
      <Navbar />
      <SearchItem onSearch={handleSearch} />
      {query !== "" && <Card articles={searchResults} isLoading={isLoading} />}
      <Footer />
    </>
  );
};

export default Explore;
