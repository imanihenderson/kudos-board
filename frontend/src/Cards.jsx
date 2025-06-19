import "./Cards.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

const Cards = () => {
    const { boardId } = useParams();
    const [cards, setCards] = useState([]);

    useEffect(() => {
    fetch(`/cards/board/${boardId}`)
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.error("Error fetching cards:", err));
  }, [boardId]);

  if (!cards || cards.length === 0) {
    return <p>No cards in this board!</p>;
    
  }

    return (
        <section className="Cards">
         
            {cards.map((card) => (
                <SingleCard
                key={card.id}
                board_id={card.board_id}
                Title={card.title}
                image={card.img_url}
                author={card.author}
                category={card.category}
                onDelete={onDelete}
            
            />
            ))}
        </section>
    )
}

export default Cards;