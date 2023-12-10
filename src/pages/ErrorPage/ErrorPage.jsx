import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
import Heading from "../../components/Navbar/Heading";

const ErrorPage = () => {
  return (
    <div>
      <Helmet>
          <title>The Daily Pulse | Error Page
      </title>
        </Helmet> 
      <Heading></Heading>
      <Navbar></Navbar>

      <div className="flex flex-col items-center gap-2 space-y-5 justify-center h-screen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-40 h-40 text-gray-400"
        >
          <path
            fill="currentColor"
            d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
          ></path>
          <rect
            width="176"
            height="32"
            x="168"
            y="320"
            fill="currentColor"
          ></rect>
          <polygon
            fill="currentColor"
            points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
          ></polygon>
          <polygon
            fill="currentColor"
            points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
          ></polygon>
        </svg>
        {/* <p className="text-9xl font-bold text-blue-400">404</p> */}
        <p className="text-4xl uppercase font-semibold text-gray-600">
          Page Not Found
        </p>
        <p className="text-2xl font-medium text-gray-400 ">
          Oops! The page you were looking for was not found.
        </p>
        <div
          className="flex gap-2 justify-center items-center text-blue-400 cursor-pointer 
       hover:text-blue-600 font-semibold"
        >
          <FaHome className="text-3xl"></FaHome>

          <Link to="/">Back to Homepage</Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
