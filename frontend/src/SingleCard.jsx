import "./SingleCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const SingleCard = ({ id, board_id, Title, image, upvotes, author, onDelete, category }) => {
  return (
    <section className="SingleCard">
      <img
        src={image}
        alt={Title}
        className="CardImg"
        // onClick={handleOpen}
        style={{ cursor: "pointer" }}
      />

      <section className="CardInfo">
        <h2 className="CardTitle">{Title}</h2>
      </section>

      <section className="CardCateg">
        <h3>{category}</h3>
      </section>

      <section className="CardOptions">
        <Link to={`/board/${id}`}>
          <button className="ViewCard">View Card</button>
        </Link>
        <button onClick={() => onDelete(id)} className="DeleteCard">
          Delete Card
        </button>
      </section>
    </section>
  );
};

export default SingleCard;
