import "./CreateNewBoard.css"
import { useEffect, useState } from 'react'

const CreateNewBoard = ({postBoard}) => {
    const [showModal, setShowModal] = useState(false);
    const [newBoardData, setNewBoardData] = useState({
        title: "",
        img_url: "",
        author: "",
        category: ""
    });
    const handleChange = (e) => {
        const{ name, value} = e.target;
        setNewBoardData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postBoard(newBoardData);
        setShowModal(false);
        setNewBoardData({
            title: "",
            img_url: "",
            author: "",
            category: ""
        });
    };

    return (
        <section className="CreateNewBoard">
            <button className="createButton" 
            onClick={() => setShowModal(true)}>
                Create New Board
                </button>

                {showModal && (
                    <div className="modal">
                        <form onSubmit={handleSubmit} className="modalForm">
                        <input
                        className="inputTitle"
                         name="title"
                         value={newBoardData.title}
                         onChange={handleChange}
                         placeholder="Title"
                         required
                       />
                       <input
                        className="inputImage"
                        name="img_url"
                        value={newBoardData.img_url}
                        onChange={handleChange}
                        placeholder="Image URL"
                        />
                       <input
                        className="inputAuthor"
                        name="author"
                        value={newBoardData.author}
                        onChange={handleChange}
                        placeholder="Author"
          />
                        <select
                        name="category"
                        value={newBoardData.category}
                        onChange={handleChange}
                        >
                            <option value="">Select a category</option>
                            <option value="Celebration">Celebration</option>
                            <option value="Thank You">Thank You</option>
                            <option value="Inspiration">Inspiration</option>

                        </select>
                        <button type="submit">Submit</button>
                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                        > Cancel 
                        </button>  
                        </form>                  
                    </div>
                )}
        </section>
    );

}

export default CreateNewBoard;