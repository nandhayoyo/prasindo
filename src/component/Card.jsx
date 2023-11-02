import React, { useEffect, useState } from "react";
import getAllArticles from "../service/api";

const Card = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((data) => setArticles(data));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto mt-5 grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-3">
      {articles.map((article, index) => (
        <div
          key={article._id}
          className="card w-96 bg-base-100 shadow-xl image-full mx-auto mb-28 -mt-20"
        >
          <figure>
            <img
              src={`https://source.unsplash.com/random/200x100?${index}`}
              alt="Pict"
              className="image-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{article.headline.main}</h2>
            <h1>{new Date(article.pub_date).toLocaleDateString()}</h1>
            <h1>{article.byline.original}</h1>
            <p>{article.snippet}</p>
            <div className="card-actions justify-end">
              <a
                href={article.web_url}
                className="font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
