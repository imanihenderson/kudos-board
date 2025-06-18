import "./SingleBoard.css";
import { useState } from "react";

const SingleBoard = ({
        Title,
        image,
        author, 
        category,
        onDelete
}) => {

    return (
        <section className="SingleBoard">
            <img
                src={image}
                alt={Title}
                className="BoardImg"
                // onClick={handleOpen}
                style={{ cursor: "pointer" }}
        />

        <section className="BoardInfo">
            <h2 className="BoardTitle">{Title}</h2>
        </section>

        <section className="BoardCateg">
            <h3>{category}</h3>
        </section>

        <section className="BoardOptions">
            <button className="ViewBoard">
                "View Board"
            </button>
            <button onClick={onDelete} className="DeleteBoard">
                "Delete Board"
            </button>

        </section>

        </section>
        
    )




}


export default SingleBoard;