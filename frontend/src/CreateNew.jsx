import "./CreateNew.css"
import { useEffect, useState } from 'react'

const CreateNew = ({postBoard}) => {
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
        <section className="CreateNew">
            <button className="createButton" 
            onClick={() => setShowModal(true)}>
                Create New Board
                </button>

                {showModal && (
                    <div className="modal">
                        <form onSubmit={handleSubmit} className="modalForm">
                        <input
                         name="title"
                         value={newBoardData.title}
                         onChange={handleChange}
                         placeholder="Title"
                         required
                       />
                       <input
                        name="img_url"
                        value={newBoardData.img_url}
                        onChange={handleChange}
                        placeholder="Image URL"
                        />
                       <input
                        name="author"
                        value={newBoardData.author}
                        onChange={handleChange}
                        placeholder="Author"
          />
                        <input
                        name="category"
                        value={newBoardData.category}
                        onChange={handleChange}
                        placeholder="Category"
                        />
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

export default CreateNew;