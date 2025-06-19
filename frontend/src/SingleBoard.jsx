import "./SingleBoard.css";
import { Link } from "react-router-dom";

const SingleBoard = ({ id, Title, image, author, category, onDelete, onClick }) => {
  return (
    <section className="SingleBoard">
      <img
        src={image}
        alt={Title}
        className="BoardImg"
        style={{ cursor: "pointer" }}
      />

      <section className="BoardInfo">
        <h2 className="BoardTitle">{Title}</h2>
      </section>

      <section className="BoardCateg">
        <h3>{category}</h3>
      </section>

      <section className="BoardOptions">
        <Link to={`/board/:${id}`}>
          <button className="ViewBoard">View Board</button>
        </Link>
        <button onClick={() => onDelete(id)} className="DeleteBoard">
          Delete Board
        </button>
      </section>
    </section>
  );
};

export default SingleBoard;
