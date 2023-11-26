import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center gap-2 space-y-5 justify-center h-screen">
      <p className="text-9xl font-bold text-blue-400">404</p>
      <p className="text-4xl uppercase font-semibold text-gray-600">Page Not Found</p>
      <p className="text-2xl font-medium text-gray-400 ">
        Oops! The page you were looking for was not found.
      </p>
      <div className="flex gap-2 justify-center items-center text-blue-400 cursor-pointer 
       hover:text-blue-600 font-semibold">
        <FaHome className="text-3xl"></FaHome >


        <Link to="/">Back to Homepage</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
