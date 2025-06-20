import "./SingleCard.css";
import { useState, useEffect } from "react";

const SingleCard = ({ id, board_id, Title, image, author, onDelete, category }) => {
  const [upvotes, setUpvotes] = useState(0);
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
        <button onClick={() => onDelete(id)} className="DeleteCard">
          Delete Card
        </button>
      </section>

        <section className="CardUpvotes">
            <button onClick={() => setUpvotes(prev => prev + 1)}>Upvotes: {upvotes}  ⇧ </button>
        </section>
    </section>
  );
};

export default SingleCard;
