import '../styles/categories.css';
import { useEffect, useState } from "react";

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    return fetch("https://nc-reviews-server.herokuapp.com/api/reviews")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.reviews[0].category, "<- CATEGORY");
        setCategory(data.reviews.category)
      });
  }, []);

  return (
    <div className="category-overall">
      <p><b>Select A Category</b></p>
      <ul>
        <li><a href="#" onClick={() => { setCategory() }}>Strategy</a></li>
        <li>Dexterity</li>
        <li>Push Your Luck</li>
        <li>Roll and Write</li>
        <li>Deck Building</li>
        <li>Engine Building</li>
      </ul>
    </div>
  );
};

export default Categories;

// onClick will trigger function that will check if clicked category has any matches in the database.
// If there is a match then map (or filter?) those results
// Or redirect to page with the filtered results??