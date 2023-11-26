import React from "react";
import moment from "moment";

const Heading = () => {
  return (
    <div className="flex flex-col justify-center items-center py-4">
      <img
        src="https://themeproducers.com/gloria/default/wp-content/uploads/sites/2/2016/08/Logo-Gloria-2.png"
        alt=""
      />
      <div className="text-gray-400"> 
        {/* <p>{moment().format("dddd")}</p> */}
        <p> {moment().format("dddd, MMMM D, YYYY")}</p>
        <p className="text-center">{moment().format("h:mm:ss a")}</p>
      </div>
    </div>
  );
};

export default Heading;
