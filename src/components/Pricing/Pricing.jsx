
import { Link } from 'react-router-dom';
const Pricing = () => {
  return (
    <Link to={"/subscription"} className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div>
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Our Pricing
        </p>
      </div>
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span className="relative inline-block">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
          >
            <defs>
              <pattern
                id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7" />
              </pattern>
            </defs>
            <rect
              fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
              width="52"
              height="24"
            />
          </svg>
          <span className="relative">Plan & Pricing</span>
        </span>{' '}
      </h2>
      <p className="text-base text-gray-700 md:text-lg">
       Buy a subscription and get access to all our features.
      </p>
    </div>
    <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
      <div className="flex flex-col  hover:border-teal-800 justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
        <div className="text-center">
          <div className="text-lg font-semibold">Start</div>
          <div className="flex items-center justify-center mt-2">
            <div className="mr-1 text-5xl font-bold">Free</div>
          </div>
          <div className="mt-2 space-y-3">
            <div className="text-gray-700">Duration 1 </div>
            <div className="text-gray-700">Trial </div>
            <div className="text-gray-700">No Support</div>
          </div>
        </div>
        <div>
          <a
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
          >
            Start for free
          </a>
          <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
            Sed ut unde omnis iste natus accusantium doloremque.
          </p>
        </div>
      </div>
      <div className="relative border border-teal-800 flex flex-col justify-between p-8 transition-shadow
       duration-300 bg-white  rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
        <div className="absolute inset-x-0 top-0 flex justify-center  -mt-3">
          <div className="inline-block bg-slate-800 px-3 py-1 text-xs font-medium tracking-wider
           text-white uppercase rounded bg-deep-purple-accent-400">
            Most Popular
          </div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold">Pro</div>
          <div className="flex items-center justify-center mt-2">
            <div className="mr-1 text-5xl font-bold">$10</div>
            <div className="text-gray-700">/ 5days</div>
          </div>
          <div className="mt-2 space-y-3">
            <div className="text-gray-700">Duration 5 days</div>
            <div className="text-gray-700">Acess All Features</div>
            <div className="text-gray-700">24/7 Support</div>
      
          </div>
        </div>
        <div>
        <a
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
          >
            Buy Pro
          </a>
          <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
            Sed ut unde omnis iste natus accusantium doloremque.
          </p>
        </div>
      </div>
      <div className="flex  hover:border-teal-800 flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
        <div className="text-center">
          <div className="text-lg font-semibold">Platinum</div>
          <div className="flex items-center justify-center mt-2">
            <div className="mr-1 text-5xl font-bold">$20</div>
            <div className="text-gray-700">/ 10days</div>
          </div>
          <div className="mt-2 space-y-3">
            <div className="text-gray-700">Duration 10 days</div>
            <div className="text-gray-700">Acess All Features</div>
            <div className="text-gray-700">24/7 Support</div>
          </div>
        </div>
        <div>
          <a
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
          >
            Buy Business
          </a>
          <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
            Sed ut unde omnis iste natus accusantium doloremque.
          </p>
        </div>
      </div>
    </div>
  </Link>
  );
};

export default Pricing;