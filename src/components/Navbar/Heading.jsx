
import moment from "moment";

const Heading = () => {
  return (
    <div className="flex flex-col justify-center items-center py-4">
      <img
        className=""
        // src="https://i.ibb.co/4RmTZN8/20231129-124345-0000-removebg-preview.png" 
        src="https://i.ibb.co/C7Gnzb5/20231129-124345-0000-removebg-preview.png" width={260}
        alt="the daily pulse"
      />
      <div className="text-gray-400"> 
        <p> {moment().format("dddd, MMMM D, YYYY")}</p>
        <p className="text-center">{moment().format("h:mm a")}</p>
      </div>
    </div>
  );
};

export default Heading;
