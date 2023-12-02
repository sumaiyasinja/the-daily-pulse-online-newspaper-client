import { useEffect, useState } from "react";
import BreakingNewsSingle from "./BreakingNewsSIngle";

const BreakingNews = () => {
  const [breakingNews, setBreakingNews] = useState([]);
  useEffect(() => {
    fetch("/breakingNews.json")
      .then((res) => res.json())
      .then((data) => setBreakingNews(data))
      .catch((error) => console.error("Error fetching breaking news:", error));
  }, []);


  return (
    <div className="flex flex-col md:flex-row">
      {/* <h1 className="text-blue-400 font-semibold w-40">Breaking News</h1> */}
      <div className="w-1/6 ">
        <img className="h-10 "
        src="https://i.ibb.co/nmNHX1G/IMG-20231129-102816-removebg-preview.png" alt="" />
      </div>
      <div className="flex ">
        {breakingNews.map((news, index) => (
          <BreakingNewsSingle key={index} news={news}></BreakingNewsSingle>
        ))}
      </div>
    </div>
  );
};

export default BreakingNews;
