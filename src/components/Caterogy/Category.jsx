import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Category = () => {
  const [caterogy, setCaterogy] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCaterogy(data.data.news_category));
  }, []);

  return (
    <div>
      <p className="font-semibold text-lg">All Caterogy</p> <br />
      <div className="join join-vertical">
        {caterogy.map((news) => (
          <NavLink
          key={news.category_id}
            to={`/category/${news.category_id}`}
            className="btn join-item justify-start text-gray-500"
          >
            {news.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Category;
