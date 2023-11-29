import { NavLink } from "react-router-dom";
import BreakingNews from "../BreakingNews/BreakingNews";
import useAuth from "../../hooks/useAuth";
import Login from "./../../pages/Login/Login";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const NavLinks = (
    <>
      <NavLink className="hover:bg-blue-400 px-2 py-1 rounded" to="/">
        Home
      </NavLink>
      <NavLink className="hover:bg-blue-400 px-2 py-1 rounded" to="/">
        Add Articles
      </NavLink>
      <NavLink
        className="hover:bg-blue-400 px-2 py-1 rounded"
        to="/allArticles"
      >
        All Articles
      </NavLink>
      <NavLink className="hover:bg-blue-400 px-2 py-1 rounded" to="/">
        Subscription
      </NavLink>
      <NavLink className="hover:bg-blue-400 px-2 py-1 rounded" to="/">
        Dashboard(admin)
      </NavLink>
      <NavLink className="hover:bg-blue-400 px-2 py-1 rounded" to="/">
        My Articles
      </NavLink>
      <NavLink className="hover:bg-blue-400 px-2 py-1 rounded" to="/">
        Premium Articles
      </NavLink>
     
     
    </>
  );

  return (
    <div>
      <div className="navbar bg-slate-800 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content
             mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52

             "
            >
              {NavLinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-5 text-lg font-medium menu-horizontal px-1">
            {NavLinks}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (

            <>
            
           <button onClick={logOut} className="hover:bg-gray-400 px-2 py-1 rounded mr-2" to="/">
                logout
            </button>
            <div className="avatar online">
              <div className="w-9 ring ring-green-600 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            </>
          ) : (
            <>
             <NavLink className="hover:bg-gray-400 px-2 py-1 rounded mr-2" to="/login">
              Login
            </NavLink>
            <div className="avatar offline">
              <div className="w-9 ring ring-slate-600 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            </>
          )}
        </div>
      </div>
      <BreakingNews></BreakingNews>
    </div>
  );
};

export default Navbar;
