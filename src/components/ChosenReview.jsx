import '../styles/chosen-review.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Link } from 'react-router-dom';

const ChosenReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState("");
  const [comments, setComments] = useState(false);
  const [viewComments, setViewComments] = useState([]);

  useEffect(() => {
    fetch(`https://nc-reviews-server.herokuapp.com/api/reviews/${review_id}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setViewComments(data.comments);

      })
    fetch(`https://nc-reviews-server.herokuapp.com/api/reviews/${review_id}`)
      .then((response) => response.json())
      .then((data) => {
        setReview(data.review);
      });
  }, [review_id]);



  return (
    <>
      <div className="chosen-review">
        <p className="chosen-title">{review.title}</p>
        <img src={review.review_img_url} className="single-item-image" alt={review.title} /><br />
        <p>CATEGORY: {review.category}</p><br />
        <p>REVIEWED BY: {review.designer}</p><br />
        <p className="review-body">{review.review_body}</p>
        <p><button className="nav-button">Up-Vote 👍</button>
          <span> 0 </span>
          <button className="nav-button">👎 Down-Vote</button></p><br />

        <ul>{viewComments.map((comment) => {
          const d = new Date();
          const year = d.getFullYear(comment.created_at);
          const month = d.getMonth(comment.created_at) + 1;
          const day = d.getDate(comment.created_at);
          console.log(year, month, day, "<--Created");
          return (
            <>
              <li key={comment.comment_id}><div className="author">{comment.author} wrote:</div>
                <div className="date"> on {`${year}-${month}-${day}`}:</div></li>
              <li>{comment.body}</li>
            </>
          )
        })}
        </ul>
      </div>
    </>
  );
};

export default ChosenReview;