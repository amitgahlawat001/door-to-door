import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-300 animate-pulse">
          404
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold mt-6 text-gray-800">
          Oops! Page Not Found
        </h2>
        <p className="mt-4 text-gray-600">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
        >
          Go Back Home
        </button>
      </div>

      {/* Optional illustration */}
      {/* <div className="mt-10">
        <img
          src="https://undraw.co/api/illustrations/404_page.svg"
          alt="Page Not Found"
          className="w-80 sm:w-96 mx-auto"
        />
      </div> */}
    </div>
  );
};

export default PageNotFound;
