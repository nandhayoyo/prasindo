import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Card from "../component/Card";
import Footer from "../component/Footer";
import getArticles from "../service/api";

const Dashboard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles(9).then((data) => setArticles(data));
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Card articles={articles} />
      <Footer />
    </>
  );
};

export default Dashboard;
