import "./CreateNewCard.css"
import { useEffect, useState } from 'react'

const CreateNewCard = ({postCard}) => {
    const [showModal, setShowModal] = useState(false);
    const [newCardData, setNewCardData] = useState({
        title: "",
        img_url: "",
        author: "",
        category: ""
    });
    const handleChange = (e) => {
        const{ name, value} = e.target;
        setNewCardData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postBoard(newBoardData);
        setShowModal(false);
        setNewCardData({
            title: "",
            img_url: "",
            author: "",
            category: ""
        });
    };

    return (
        <section className="CreateNewCard">
            <button className="createButton" 
            onClick={() => setShowModal(true)}>
                Create New Card
                </button>

                {showModal && (
                    <div className="modal">
                        <form onSubmit={handleSubmit} className="modalForm">
                        <input
                         name="title"
                         value={newCardData.title}
                         onChange={handleChange}
                         placeholder="Title"
                         required
                       />
                       <input
                        name="img_url"
                        value={newCardData.img_url}
                        onChange={handleChange}
                        placeholder="Image URL"
                        />
                       <input
                        name="author"
                        value={newCardData.author}
                        onChange={handleChange}
                        placeholder="Author"
          />
                        <input
                        name="category"
                        value={newCardData.category}
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

export default CreateNewCard;