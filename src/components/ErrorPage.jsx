import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center min-h-[70vh] p-6 bg-gray-50">
      <div className="bg-white border rounded-3xl shadow-lg p-10 w-full max-w-md text-center">
        <div className="flex justify-center mb-6">
          <AlertTriangle className="text-red-500 w-20 h-20 animate-bounce" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          404 - Page Not Found
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          The page you are looking for doesn't exist or might have been moved.
        </p>

        <Link
          to="/"
          className="w-full inline-block bg-gray-900 text-white rounded-lg py-2 px-5 text-lg hover:bg-gray-800 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
