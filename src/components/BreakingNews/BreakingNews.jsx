import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  const [breakingNews, setBreakingNews] = useState([]);

  useEffect(() => {
    fetch('/breakingNews.json')
      .then((res) => res.json())
      .then((data) => setBreakingNews(data))
      .catch((error) => console.error("Error fetching breaking news:", error));
  }, []);

  console.log(breakingNews);

  return (
    <div>
      <h1>Breaking News</h1>
     {
       breakingNews.map((news, index) => (
         <Marquee key={index}>
           <h1>{news.headline}</h1>
           <h3>{news.source}</h3>
         </Marquee>
       ))
     }
    </div>
  );
};

export default BreakingNews;
