import React from "react";

const Card = ({ articles, isLoading }) => {
  return (
    <>
      <section className="">
        <div className="max-w-screen-xl mx-auto grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-3">
          {isLoading
            ? [0, 1, 2].map((index) => (
                <div
                  key={index}
                  role="status"
                  className="max-w-sm p-5 -mt-10 mb-10 rounded-xl bg-slate-200 border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
                >
                  <div className="flex p-5 items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                    <svg
                      className="w-10 h-10 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 20"
                    >
                      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    </svg>
                  </div>
                  <div className="h-2.5 bg-gray-200 rounded-full dark-bg-gray-700 w-48 mb-4"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark-bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark-bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark-bg-gray-700"></div>
                </div>
              ))
            : articles.map((article, index) => (
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
                    <h1 className="font-semibold">
                      {article.byline
                        ? article.byline.original
                        : "No byline available"}
                    </h1>
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
      </section>
    </>
  );
};

export default Card;
