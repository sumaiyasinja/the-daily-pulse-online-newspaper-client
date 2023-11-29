
import moment from "moment";

const Heading = () => {
  return (
    <div className="flex flex-col justify-center items-center py-4">
      <img
        // src="https://themeproducers.com/gloria/default/wp-content/uploads/sites/2/2016/08/Logo-Gloria-2.png"
        src="https://i.ibb.co/4RmTZN8/20231129-124345-0000-removebg-preview.png" width={360}
        alt=""
      />
      <div className="text-gray-400"> 
        {/* <p>{moment().format("dddd")}</p> */}
        <p> {moment().format("dddd, MMMM D, YYYY")}</p>
        <p className="text-center">{moment().format("h:mm a")}</p>
      </div>
    </div>
  );
};

export default Heading;
