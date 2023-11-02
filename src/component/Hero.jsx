import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="dark:bg-violet-400 bg-violet-400">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
          <h1 className="text-2xl font-bold sm:text-5xl xl:max-w-2xl dark:text-gray-900">
            Find the latest news and interesting information here!
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
            Empowering Minds Through Information
          </p>
          <div className="flex flex-wrap justify-center">
            <a
              type="button"
              href='/explore'
              className="px-8 py-3 m-2 text-lg font-semibold rounded-xl dark:bg-gray-800 bg-gray-800 text-gray-50 dark:text-gray-50 flex items-center"
            >
              Let's More Explore
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
                  d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
