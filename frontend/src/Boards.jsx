import "./Boards.css";
import SingleBoard from "./SingleBoard"
import {useEffect, useState} from "react";

const Boards = ({ boards }) => {
    if (!boards || boards.length === 0) {
    return <p>Create a Board!</p>;
  }

    return (
        <section className="Boards">
         
            {boards.map((board) => (
                <SingleBoard
                key={board.id}
                Title={board.title}
                image={board.img_url}
                author={board.author}
                category={board.category}
            
            />
            ))}
        </section>
    );
};

export default Boards;