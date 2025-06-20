import "./SingleBoard.css";
import { Link } from "react-router-dom";
import CreateNewCard from "./CreateNewCard";

const SingleBoard = ({ id, Title, image, author, category, onDelete, onClick , postCard}) => {
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
        <Link to={`/board/${id}`}>
          <button className="ViewBoard">View</button>
        </Link>
        <button onClick={() => onDelete(id)} className="DeleteBoard">
          Delete 
        </button>
        </section>

        <CreateNewCard class="createNew" postCard={postCard} board_id={id}/>
      
    </section>
  );
};

export default SingleBoard;
