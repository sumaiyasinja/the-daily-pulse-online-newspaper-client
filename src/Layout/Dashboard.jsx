import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaBlog, FaIdCard } from "react-icons/fa";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div className="antialiased bg-slate-900 w-full min-h-screen h-full text-slate-300 relative py-4">
      <Navbar />
      <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl h-full my-10 px-2">
       {/* fixed grid elements */}
        <div id="menu" className="bg-white/10 col-span-3 rounded-lg p-4">
          <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 to-transparent bg-clip-text text-transparent">
            Dashboard<span className="text-indigo-400">.</span>
          </h1>
          <p className="text-slate-400 text-sm mb-2">Admin Dashboard,</p>
          <a
            href="#"
            className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2"
          >
            <div>
              <img
                className="rounded-full w-10 h-10 relative object-cover"
                src={user?.photoURL}
                alt=""
              />
            </div>
            <div>
              <p className="font-medium group-hover:text-indigo-400 leading-4">
                {user?.displayName}
              </p>
              <span className="text-xs text-slate-400">{user?.email}</span>
            </div>
          </a>
          <hr className="my-2 border-slate-700" />
          <div id="menu" className="flex flex-col space-y-2 my-5">
            {/* ... Your menu items */}
            <Link
              to="/dashboard"
              className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
            >
              <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 group-hover:text-indigo-400"
                  >
                    <path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </div>
                <Link to="/dashboard/home">
                  <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">
                    Dashboard
                  </p>
                  <p className="text-slate-400 text-sm hidden md:block">
                    Data overview
                  </p>
                </Link>
              </div>
            </Link>
            <Link
              to="/dashboard/manageUsers"
              className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
            >
              <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 group-hover:text-indigo-400"
                  >
                    <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">
                    Users
                  </p>
                  <p className="text-slate-400 text-sm hidden md:block">
                    Manage users
                  </p>
                </div>
              </div>
            </Link>
            <Link
              to="/dashboard/manageAricles"
              className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
            >
              <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                <div>
                  <FaBlog className="w-6 text-gray-400 h-6 group-hover:text-indigo-400"></FaBlog>
                </div>
                <div>
                  <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">
                    Articles
                  </p>
                  <p className="text-slate-400 text-sm hidden md:block">
                    Manage Articles
                  </p>
                </div>
              </div>
            </Link>
            <Link
              to="/dashboard/addPublisher"
              className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
            >
              <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                <div>
                  <FaIdCard className="w-6 text-gray-400 h-6 group-hover:text-indigo-400"></FaIdCard>
                </div>
                <div>
                  <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">
                  Publisher
                  </p>
                  <p className="text-slate-400 text-sm hidden md:block">
                    Add Publisher
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <p className="text-sm text-center text-gray-600">
            &copy; 2023 | The Daily Pulse
          </p>
        </div>

        {/* ... Rest of the component as outlet */}
        <div className="col-span-9  rounded-lg">
        <Outlet />

        </div>
        
        
      </div>
      {/* <Footer></Footer> */}

    </div>
    
  );
};

export default Dashboard;
