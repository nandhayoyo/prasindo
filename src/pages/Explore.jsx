import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Card from "../component/Card";
import Footer from "../component/Footer";
import getArticles from "../service/api";
import SearchItem from "../component/SearchItem";

const Explore = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getArticles().then((data) => setSearchResults(data));
  }, []);

  const handleSearch = (searchQuery) => {
    getArticles(searchQuery).then((data) => setSearchResults(data));
    setQuery(searchQuery);
  };

  return (
    <>
      <Navbar />
      <SearchItem onSearch={handleSearch} />
      {query !== "" && <Card articles={searchResults} />}
      <Footer />
    </>
  );
};

export default Explore;
