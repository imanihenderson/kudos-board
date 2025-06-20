import "./CreateNewCard.css"
import { useEffect, useState } from 'react'

const CreateNewCard = ({postCard, board_id}) => {
    const [showModal, setShowModal] = useState(false);
    const [newCardData, setNewCardData] = useState({
        title: "",
        img_url: "",
        author: "",
        category: ""
    });
    const [gifs, setGifs] = useState([]);

    const handleChange = (e) => {
        const{ name, value} = e.target;
        setNewCardData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    

    const cardWithBoardId = {
      ...newCardData,
      board_id: board_id,
      upvotes: 0,
    };

  const fetchGiphy = (q) => {
  const apiKey = 'mBWCxIg8d1msp8PBJnGmznwCnr2INjx0'
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(q)}&limit=10&offset=0&rating=G&lang=en`;

    fetch(url)
        .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
        })
        .then(data => {
            if (data.data.length > 0) {
                const firstGifUrl = data.data[0].images.original.url;
                setNewCardData(prev => ({
                    ...prev,
                    img_url: firstGifUrl
                }));
            }
        
        })
        .catch(error => {
        console.error('Fetch error:', error);
        });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    

    postCard(cardWithBoardId).then(() => {
      setShowModal(false);
      setNewCardData({
        title: "",
        img_url: "",
        author: "",
        category: "",
      });
    });
    };
  

    return (
        <section className="CreateNewCard">
            <button className="createButton" 
            onClick={() => setShowModal(true)}>
                Create New Card
                </button>
            <section className="ModalStyle">
                {showModal && (
                    <div className="modal">
                        <form onSubmit={handleSubmit} className="modalForm">
                        <input className="inputTitle"
                         name="title"
                         value={newCardData.title}
                         onChange={handleChange}
                         placeholder="Title"
                         required
                       />
                       <input className="inputAuthor"
                        name="author"
                        value={newCardData.author}
                        onChange={handleChange}
                        placeholder="Author"
          />
                        <input className="inputCategory"
                        name="category"
                        value={newCardData.category}
                        onChange={(e) => {
                            handleChange(e);
                            fetchGiphy(e.target.value);
                        }}
                        placeholder="Category"
                        />
                        <button className="submitButton" type="submit">Submit</button>
                        <button
                            className="cancelButton"
                            type="button"
                            onClick={() => setShowModal(false)}
                        > Cancel 
                        </button>  
                        </form>               
                    </div>
                )}
                </section>
        </section>
    );

}

export default CreateNewCard;