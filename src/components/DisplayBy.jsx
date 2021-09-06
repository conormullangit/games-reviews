import '../styles/nav.css';

const DisplayBy = () => {
  return (
    <div className="display-by comp-box">
      <select>
        <option disabled>Display By</option>
        <option>Title</option>
        <option>Category</option>
        <option>Owner</option>
      </select>
    </div>
  );
};

export default DisplayBy;