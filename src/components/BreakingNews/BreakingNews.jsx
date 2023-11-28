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

  console.log("break me", breakingNews);

  return (
    <div className="flex">
      <h1 className="text-blue-400 font-semibold w-40">Breaking News</h1>
      <div className="flex ">
        {breakingNews.map((news, index) => (
          <BreakingNewsSingle key={index} news={news}></BreakingNewsSingle>
        ))}
      </div>
    </div>
  );
};

export default BreakingNews;
