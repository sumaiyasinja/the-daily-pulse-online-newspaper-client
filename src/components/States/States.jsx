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
  let premiumUsers = users.filter ((user) => user?.status === "premium").length;
  let normalUsers = totalUsers - premiumUsers



  return (
    <div className="stats shadow flex justify-center items-center  text-center container mx-auto">
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
  );
};

export default States;
