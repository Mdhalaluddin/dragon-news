import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const MainNews = ({ news }) => {
    const { title, thumbnail_url, details, _id } = news;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={thumbnail_url} alt="thumbnail_url" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                {
                    details.length > 200
                        ? <p>{details.slice(0, 200)}
                            <Link to={`/news/${_id}`}
                                className="text-blue-500 font-bold"> Read More...</Link></p>
                        :
                        <p>{details}</p>


                }
            </div>
        </div>
    );
};
MainNews.propTypes = {
    news: PropTypes.array
}

export default MainNews;