import './chosen-review.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ViewComments = () => {
  return (
    <div className="comment-section">
      <p>Comments</p>

      {/* <ul className="item-list">
        {reviews.map((review) => {
          return (
            <li key={review.review_id} className="item">
              <Link to={`/api/reviews/${review.review_id}`}>
                <figure>
                  <img src={review.review_img_url} alt={review.title} />
                  <figcaption>
                    <p>TITLE: {review.title}</p><br />
                    <p>CATEGORY: {review.category}</p><br />
                    <p>REVIEWER: {review.designer}</p>
                  </figcaption>
                </figure>
              </Link>
            </li>
          );
        })}
      </ul> */}

    </div>
  );
};

export default ViewComments;