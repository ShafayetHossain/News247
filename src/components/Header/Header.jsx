import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import { useEffect, useState } from "react";
const Header = () => {
  const [latestNews, setLetestNews] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/category/01")
      .then((res) => res.json())
      .then((news) => setLetestNews(news.data));
  }, []);
  return (
    <div>
      <HeaderTitle></HeaderTitle>

      <div className="flex justify-center items-center bg-gray-200 p-2">
        <p className="bg-red-500 text-white font-bold py-1 px-4">Latest</p>
        <Marquee pauseOnHover={true} className="">
          {latestNews.map((news) => (
            <Link to={`/details/${news._id}`} className="mr-4">**{news.title}**</Link>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
