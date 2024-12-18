import { NavLink } from "react-router-dom";

const DetailsCard = ({ news }) => {
  const { category_id, image_url, title, details } = news;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image_url} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions">
            <NavLink to={`/category/${category_id}`}>
              {" "}
              <button className="btn font-semibold text-white hover:bg-red-400 bg-red-500">
                Back News Category
              </button>
            </NavLink>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default DetailsCard;
