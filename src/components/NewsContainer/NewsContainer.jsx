import { Link } from "react-router-dom";
import TypeWrites from "../Typewrites/TypeWrites";

const NewsContainer = () => {
  return (
    <div>
      <TypeWrites></TypeWrites>
      <section className="px-5 py-10  text-gray-800">
        <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
          {/* exclusives all section */}
          <Link to="/allArticles" className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
            <div className="flex flex-col space-y-8 md:space-y-12">
              {/* exclisive */}
              <div className="flex flex-col space-y-2">
                <h3 className="flex items-center space-x-2 text-gray-600">
                  <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-blue-600"></span>
                  <span className="text-xs font-bold tracki uppercase">Exclusive</span>
                </h3>
                <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Donec sed elit quis odio mollis dignissim eget et nulla.</a>
                <p className="text-xs text-gray-600">47 minutes ago by
                  <a rel="noopener noreferrer" href="#" className="hover:underline text-blue-600">Leroy Jenkins</a>
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="flex items-center space-x-2 text-gray-600">
                  <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-blue-600"></span>
                  <span className="text-xs font-bold tracki uppercase">Exclusive</span>
                </h3>
                <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Donec sed elit quis odio mollis dignissim eget et nulla.</a>
                <p className="text-xs text-gray-600">47 minutes ago by
                  <a rel="noopener noreferrer" href="#" className="hover:underline text-blue-600">Leroy Jenkins</a>
                </p>
              </div>
                          {/* exclisive */}

            </div>
            {/* exclusives more */}
            <div className="flex flex-col w-full space-y-2">
              <div className="flex w-full h-1 bg-opacity-10 bg-blue-600">
                <div className="w-1/2 h-full bg-blue-600"></div>
              </div>
              <a rel="noopener noreferrer" href="#" className="flex items-center justify-between w-full">
                <span className="text-xs font-bold tracki uppercase">Read more exclusives news</span>
                <svg viewBox="0 0 24 24" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 strokeCurrent text-blue-600">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
           
                        {/* exclusives more end*/}

          </Link>
                    {/* exclusives all section end */}

          <div
            className="relative flex col-span-12 bg-center bg-no-repeat bg-cover bg-gray-500 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96"
            style={{ backgroundImage: "url('https://www.carpe.io/wp-content/uploads/2018/06/globaltech.jpg')" }}
          >
            <span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 border-blue-600 text-gray-100">Dhaka, Bangladesh</span>
            <a className="flex flex-col items-center justify-end p-6 text-center sm:p-8 group via-transparent flex-grow-1 bg-gradient-to-b from-gray-900 to-gray-900">
              <span className="flex items-center mb-4 space-x-2 text-blue-600">
                <span className="relative flex-shrink-0 w-2 h-2 rounded-full bg-blue-600">
                  <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping bg-blue-600"></span>
                </span>
                <span className="text-sm font-bold">Live</span>
              </span>
              <Link to="https://www.youtube.com/watch?v=XWq5kBlakcQ" target="_blank"
               className="font-serif text-2xl font-semibold group-hover:underline text-gray-100">[Live 24/7] Breaking news, top stories and documentaries from around the world..
               </Link>
            </a>
          </div>
          <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
            <div className="mb-8 space-x-5 border-b-2 border-opacity-10 border-blue-600">
              <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 border-blue-600">Latest</button>
              <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 border-transparent text-gray-600"></button>
            </div>
            {/* news card container */}
            <Link to={"/allArticles"} className="flex flex-col divide-y divide-gray-300">
              
              {/* news card of sidebar */}
              <div className="flex px-1 py-4">
                <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500" src=
                "https://source.unsplash.com/random/245x325" 
                />
                <div className="flex flex-col flex-grow">
                  <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Top news.</a>
                  <p className="mt-auto text-xs text-gray-600">14 minutes ago
                    <a rel="noopener noreferrer" href="#" className="block text-blue-400 lg:ml-2 lg:inline hover:underline">Sports</a>
                  </p>
                </div>
              </div>
              <div className="flex px-1 py-4">
                <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500" src=
                "https://source.unsplash.com/random/245x325" 
                />
                <div className="flex flex-col flex-grow">
                  <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Top news.</a>
                  <p className="mt-auto text-xs text-gray-600">14 minutes ago
                    <a rel="noopener noreferrer" href="#" className="block text-blue-400 lg:ml-2 lg:inline hover:underline">Sports</a>
                  </p>
                </div>
              </div>
              <div className="flex px-1 py-4">
                <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500" src=
                "https://source.unsplash.com/random/245x325" 
                />
                <div className="flex flex-col flex-grow">
                  <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Top news.</a>
                  <p className="mt-auto text-xs text-gray-600">14 minutes ago
                    <a rel="noopener noreferrer" href="#" className="block text-blue-400 lg:ml-2 lg:inline hover:underline">Sports</a>
                  </p>
                </div>
              </div>
              <div className="flex px-1 py-4">
                <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500" src=
                "https://source.unsplash.com/random/245x325" 
                />
                <div className="flex flex-col flex-grow">
                  <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Top news.</a>
                  <p className="mt-auto text-xs text-gray-600">14 minutes ago
                    <a rel="noopener noreferrer" href="#" className="block text-blue-400 lg:ml-2 lg:inline hover:underline">Sports</a>
                  </p>
                </div>
              </div>
              
              {/* add more news card of sidebar here*/}

              
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsContainer;
