import { NavLink } from "react-router-dom";
import { useEffect } from 'react';
import BreakingNews from "../BreakingNews/BreakingNews";

const Navbar = () => {
    const NavLinks = <>
        <NavLink className="hover:bg-blue-400 px-2 py-1 rounded" to="/">Home</NavLink>
        <NavLink className="hover:bg-blue-400 px-2 py-1 rounded" to="/">Add Articles</NavLink>
        <NavLink className="hover:bg-blue-400 px-2 py-1 rounded" to="/">All Articles</NavLink>
        <NavLink className="hover:bg-blue-400 px-2 py-1 rounded" to="/">Subscription</NavLink>
        <NavLink className="hover:bg-blue-400 px-2 py-1 rounded" to="/">Dashboard(admin)</NavLink>
        <NavLink className="hover:bg-blue-400 px-2 py-1 rounded" to="/">My Articles
        </NavLink>
        <NavLink className="hover:bg-blue-400 px-2 py-1 rounded" to="/">Premium Articles</NavLink>
    </>

    return (
              <div>
               
        <div className="navbar bg-slate-800 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content
             mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52

             ">
              {NavLinks}
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
          {/* <div>
            <img src="https://themeproducers.com/gloria/default/wp-content/uploads/sites/2/2016/08/Logo-Gloria-2.png" alt="" />
          </div> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-5 text-lg font-medium menu-horizontal px-1">
            {NavLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
      <BreakingNews></BreakingNews>
      </div>

    );
};

export default Navbar;