import { Link } from "react-router-dom";

const News = ({ news }) => {
  const { title, image_url, details, total_view, rating, _id } =
    news;
  return (
    <div className="card bg-base-100  border rounded-none p-4">
      <h2 className="card-title">{title}</h2>
      <figure className="px-10 pt-10">
        <img src={image_url} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}
            <Link to={`/news/${_id}`} className="text-red-700 font-bold pl-2 block ">
              Read More...
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
};

export default News;
