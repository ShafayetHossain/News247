import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <img
        src={news.thumbnail_url}
        alt={news.title}
        className="w-full h-96 object-cover object-top"
      />
      <div className="p-4">
        <div className="flex items-center justify-between text-gray-600 text-sm">
          <p>{news.author.name}</p>
          <p>{new Date(news.author.published_date).toLocaleDateString()}</p>
        </div>
        <h2 className="mt-2 text-lg font-semibold text-gray-800">
          {news.title}
        </h2>
        <p className="mt-1 text-gray-600 text-sm">
          {news.details.slice(0, 100)}...
        </p>
        <div className="flex items-center justify-between mt-3 text-gray-600 text-sm">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`mr-1 ${
                  index < Math.floor(news.rating.number)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
            <span className="ml-2">{news.rating.number}</span>
          </div>
          <span>{news.total_view} 👁️</span>
        </div>
        <div className="flex mt-4 justify-between items-center">
          <Link
          to={`/details/${news._id}`}
            className="text-blue-500 hover:underline text-sm font-medium"
          >
            Read More
          </Link>
          <p className="text-gray-500">{news.rating.badge}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
