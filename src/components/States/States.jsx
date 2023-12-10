import React, { useState, useEffect } from 'react';
import { FaBookReader } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { FcReadingEbook } from "react-icons/fc";

import { MdEmojiEvents } from "react-icons/md";

import CountUp from 'react-countup';
import useUser from '../../hooks/useUser';

const States = () => {
  const [users] = useUser()
  console.log("users in state",users);

  const totalUsers = users.length;
  let premiumUsers = users.filter ((user) => user?.premiumTaken === true).length;
  let normalUsers = totalUsers - premiumUsers



  return (
    <div>
          <div className="max-w-xl container mx-auto my-9 mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div>
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Our Users CountUp
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
          <span className="relative">User</span>
        </span>{' '}
         Statistics
      </h2>
      
    </div>
    <div className="stats shadow flex justify-center items-center  text-center ">
   
      {/* Total Users */}
      <div className="stat   space-y-3 flex flex-col justify-center items-center hover:bg-green-400 hover:text-white py-4">
        <div className="text-7xl text-primary-content "> <MdEmojiEvents></MdEmojiEvents></div>
        <div className="stat-value ">
          <CountUp end={totalUsers} duration={2} />
        </div>
        <div className="stat-title">Total Users</div>
        
      </div>

      {/* Normal Users */}
      <div className="stat  space-y-3  flex flex-col justify-center items-center hover:bg-primary-content py-4">
        <div className="text-7xl text-primary-content  "> <FcReadingEbook></FcReadingEbook></div>
        <div className="stat-value ">
          <CountUp end={normalUsers} duration={2} />
        </div>
        <div className="stat-title">Regular Users</div>
        
      </div>

      {/* Premium Users */}
      <div className="stat  space-y-3  flex flex-col justify-center items-center hover:bg-amber-500 hover:text-white py-4">
        <div className="text-7xl text-primary-content "><GiTakeMyMoney></GiTakeMyMoney>
</div>
        <div className="stat-value ">
          <CountUp end={premiumUsers} duration={2} />
        </div>
        <div className="stat-title">Premium Users</div>
        
      </div>
        
      </div>

 
    </div>
  );
};

export default States;
