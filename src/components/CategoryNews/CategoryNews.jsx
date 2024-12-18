import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const CategoryNews = () => {
    const {data:news} = useLoaderData();
    return (
        <div>
            <h1>{news.length} News found</h1>
            <div>
                {
                    news.map((news)=> <NewsCard key={news._id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;