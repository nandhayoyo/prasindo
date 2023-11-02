import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Card from "../component/Card";
import Footer from "../component/Footer";
import getArticles from "../service/api";

const Dashboard = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      getArticles(9)
        .then((data) => {
          setArticles(data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, []);


  return (
    <>
      <Navbar />
      <Hero />
      <Card articles={articles} isLoading={isLoading} />
      <Footer />
    </>
  );
};

export default Dashboard;
