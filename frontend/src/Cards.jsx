import "./Cards.css"
import SingleCard from "./SingleCard";
import CreateNewCard from "./CreateNewCard";
import { useParams } from "react-router-dom";

const Cards = ({ cards, onDelete, postCard }) => {
    const { boardId } = useParams();
  
  
  if (!cards || cards.length === 0) {
    return <p>No cards in this board!</p>;
    
  }

    return (
        <section className="Cards">
            <CreateNewCard postCard={postCard} />
         
            {cards.map((card) => (
                <SingleCard
                key={card.id}
                id={card.id}
                board_id={card.board_id}
                Title={card.title}
                image={card.img_url}
                author={card.author}
                category={card.category}
                upvotes={card.upvotes}
                onDelete={onDelete}
            
            />
            ))}
        </section>
    )
}

export default Cards;