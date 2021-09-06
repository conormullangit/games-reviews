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


  console.log(viewComments, "<--");
  return (
    <>
      <div className="chosen-review">
        <p className="chosen-title">{review.title}</p>
        <img src={review.review_img_url} className="single-item-image" alt={review.title} /><br />
        <p>CATEGORY: {review.category}</p><br />
        <p>REVIEWER: {review.designer}</p><br />
        <p className="review-body">{review.review_body}</p>
        <button className="nav-button">Up-Vote 👍<span> 0 </span></button><br />

        <ul>{viewComments.map((comment) => {
          return (
            <li key={comment.comment_id}>{comment.body}</li>
          )
        })}
        </ul>

        {/* {comments ? <p>{comments}</p> : null} */}
      </div>



      {/* <nav className="bottom-bar">

        <button className="nav-button" onClick={() => { setComments(true) }}>View Comments</button><br />
        <button className="nav-button">Leave Comment</button>
      </nav> */}
    </>
  );
};

export default ChosenReview;