import "./Boards.css";
import SingleBoard from "./SingleBoard";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const Boards = ({ boards, onDelete }) => {
    const navigate = useNavigate();

    const handleBoardClick = (id) => {
        navigate(`/board/${id}`);
    }
    if (!boards || boards.length === 0) {
    return <p>Create a Board!</p>;
  }

    return (
        <section className="Boards">
         
            {boards.map((board) => (
                <SingleBoard
                key={board.id}
                id={board.id}
                Title={board.title}
                image={board.img_url}
                author={board.author}
                category={board.category}
                onDelete={onDelete}
                onClick={handleBoardClick}
            
            />
            ))}
        </section>
    );
};

export default Boards;