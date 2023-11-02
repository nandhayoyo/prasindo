import React from "react";

const Card = ({ articles }) => {
  return (
    <>
      
      <div className="max-w-screen-xl mx-auto grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-3">
          {articles.map((article, index) => (
            <div
              key={article._id}
              className="card w-96 bg-base-100 shadow-xl image-full mx-auto mb-20 -mt-20"
            >
              <figure>
                <img
                  src={`https://source.unsplash.com/random/200x100?${index}`}
                  alt="Pict"
                  className="image-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">
                  {article.headline.main}
                </h2>
                <h1 className="italic">
                  {new Date(article.pub_date).toLocaleDateString()}
                </h1>
                <h1 className="font-semibold">{article.byline.original}</h1>
                <p>{article.snippet}</p>
                <div className="card-actions flex flex-wrap justify-end text-blue-300">
                  <a
                    href={article.web_url}
                    className="font-semibold flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
    </>
  );
};

export default Card;
