import { Link, NavLink } from "react-router-dom";
import BreakingNews from "../BreakingNews/BreakingNews";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
     
  };

  const NavLinks = (
    <>
      <NavLink className="hover:bg-blue-400 px-2 py-1 rounded" to="/">
        Home
      </NavLink>
      <NavLink
        className="hover:bg-blue-400 px-2 py-1 rounded"
        to="/allArticles"
      >
        All Articles
      </NavLink>
      <NavLink className="hover:bg-blue-400 px-2 py-1 rounded" to="/aboutUs">
        About Us
      </NavLink>
      {user ? (
        <>
          <NavLink className="hover:bg-blue-400 px-2 py-1 rounded" to="/premiumArticles">
            Premium Articles
          </NavLink>
          <NavLink className="hover:bg-blue-400 px-2 py-1 rounded" to="/subscription">
            Subscription
          </NavLink>

          <NavLink
            className="hover:bg-blue-400 px-2 py-1 rounded"
            to="/addArticle"
          >
            Add Articles
          </NavLink>
          <NavLink className="hover:bg-blue-400 px-2 py-1 rounded" to="/myArticles">
            My Articles
          </NavLink>
          <NavLink
            className="hover:bg-blue-400 px-2 py-1 rounded"
            to="/dashboard/home"
          >
            Dashboard
          </NavLink>
        </>
      ) : (
        <></>
      )}
    </>
  );

  return (
    <div className=" z-50">
      <div className="navbar bg-slate-800 text-white">
        <div className="navbar-start">
          <div className="dropdown absolute z-[60] ">
            <label tabIndex={0} className="btn btn-ghost  lg:hidden">
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
             mt-3 z-[1] p-2 shadow  text-center w-52
              text-black bg-slate-300 rounded-lg
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
              <button
                onClick={handleLogOut}
                className="hover:bg-gray-400 px-2 py-1 rounded mr-2"
                to="/"
              >
                logout
              </button>
              <Link to="/profile" className="avatar online">
                <div className="w-9 ring ring-green-600 rounded-full">
                  {user.photoURL ? (
                    <img src={user?.photoURL} alt="" />
                  ) : (
                    <img
                      src="https://i.ibb.co/s65Z563/CITYPNG-COM-Profile-User-Round-White-Icon-Symbol-PNG-1000x1000.png"
                      className=""
                    />
                  )}
                </div>
              </Link>
            </>
          ) : (
            <>
              <NavLink
                className="hover:bg-gray-400 px-2 py-1 rounded mr-2"
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className="hover:bg-gray-400 px-2 py-1 rounded mr-2"
                to="/register"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
      {/* todo : future work if dropdowen menu needed */}
      {/* {   user && dropdown ?
       
        <ul className="absolute z-[60] right-2 menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-52">
          <Link to="/profile" className="w-full text-center rounded hover:bg-blue-300 hover:text-white hover:font-semibold">My Profile</Link>
          <li onClick={handleLogOut} className="w-full text-center rounded hover:bg-blue-300 hover:text-white hover:font-semibold">Logout</li>
        </ul>
      :<></>
      }     */}
      <BreakingNews></BreakingNews>
    </div>
  );
};

export default Navbar;
