import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    return fetch("https://nc-reviews-server.herokuapp.com/api/reviews")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data.reviews);
      });
  }, []);

  return (
    <section className="list-section">
      <p>Welcome To NC Reviews.</p>
      <select name="category" id="category-name">
        <option></option>
      </select>

      <ul className="item-list">
        {reviews.map((review) => {
          return (
            <li key={review.review_id} className="item">
              <Link to={`/api/items/${review.review_id}`}>
                <figure>
                  <img src={review.review_img_url} alt={review.title} />
                  <figcaption>
                    Title: {review.title}
                    <p>Category: {review.category}</p>
                    <p>Reviewed By: {review.designer}</p>
                  </figcaption>
                </figure>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Home;