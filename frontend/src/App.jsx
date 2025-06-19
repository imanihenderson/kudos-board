import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Boards from "./Boards";
import Cards from "./Cards";


const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [boards, setBoards] = useState([]);
  const [newBoardData, setNewBoardData] = useState({
    title: "",
    img_url: "",
    author: "",
    category: ""
  });
  const [searchedBoard, setSearchedBoard] = useState(null);
  const [cards, setCards] = useState([]);
  const [newCardData, setNewCardData] = useState({

    board_id: "",
    title: "",
    img_url: "",
    author: "",
    category: ""
  });

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(prev => !prev);


  const getBoards = () => {
    fetch("http://localhost:3000/boards")
      .then((response) => response.json())
      .then((data) => setBoards(data))
      .catch((error) => console.error("Error fetching boards:", error));
  };


  const getOneBoard = (id) => {
    fetch(`http://localhost:3000/boards/${id}`)
      .then((res) => {
      if (!res.ok) throw new Error("Board not found");
      return res.json()
      })
      .then((data) => setSearchedBoard(data))
      .catch((error) => {
        console.error("Error fetching board:", error);
        setSearchedBoard(null);
      });

    };

  const deleteBoard = (id) => {
    fetch(`http://localhost:3000/boards/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete board", error);
        }
        return response.json()

      })
      .then((data) => {
        console.log(`Board with id ${id} deleted successfully.`, data);
        setBoards((prevBoards) => prevBoards.filter(board => board.id !== id));

      })
      .catch((error) => console.error("Error deleting board:", error));
  };

  const updateBoard = (id) => {
    fetch(`http://localhost:3000/boards/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update board");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Updated board:", data);
        // update UI later
      })
      .catch((error) => console.error("Error updating board:", error));
  };


  const postBoard = (newBoardData) => {
    fetch("http://localhost:3000/boards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBoardData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create board");
        }
        return response.json();
      })
      .then((data) => {
        // adds new board to board state, updating ui
        setBoards(prevBoards => [...prevBoards, data])

        //clear form
        setNewBoardData({
          title: "",
          img_url: "",
          author: "",
          category: ""
        })
      })
      .catch((error) => console.error("Error creating board:", error));
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setNewBoardData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  useEffect(() => {
    getBoards()
  }, []);
  //

   useEffect(() => {

    const handleSearch = async () => {
      if (searchTerm) {
        const filtered = boards.filter(board =>
          board.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchedBoard(filtered);
      } else {
        setSearchedBoard(null);
      }

    };

    handleSearch();
  }, [searchTerm], boards);

  const handleClear = () => {
    window.location.reload();
  };

  // Beginning of card functionality

  const getCards = () => {
    fetch("http://localhost:3000/cards")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching cards:", error));
  };

 const getOneCard = (id) => {
    fetch(`http://localhost:3000/cards/${id}`)
      .then((res) => {
      if (!res.ok) throw new Error("Card not found");
      return res.json()
      })
      .then((data) => {
          console.log(data)
      }) 
      .catch((error) => {
        console.error("Error fetching card:", error);
      });

    };

  const deleteCard = (id) => {
    fetch(`http://localhost:3000/cards/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete card", error);
        }
        return response.json()

      })
      .then((data) => {
        console.log(`Card with id ${id} deleted successfully.`, data);
        setCards((prevCards) => prevCards.filter(card => card.id !== id));

      })
      .catch((error) => console.error("Error deleting card:", error));
  };
  
  const updateCard = (id, updatedData) => {
    fetch(`http://localhost:3000/cards/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update card");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Updated card:", data);
        // update UI later
      })
      .catch((error) => console.error("Error updating card:", error));
  };

  const postCard = (newCardData) => {
    fetch("http://localhost:3000/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCardData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create card");
        }
        return response.json();
      })
      .then((data) => {
        // adds new card to card state, updating ui
        setCards(prevCards => [...prevCards, data])

        //clear form
        setNewCardData({
          board_id: "",
          title: "",
          img_url: "",
          author: "",
          category: ""
        })
      })
      .catch((error) => console.error("Error creating card:", error));
  };

  



  return (
    <section className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>

    
      <NavBar searchTerm={searchTerm} 
      setSearchTerm={setSearchTerm} 
      postBoard={postBoard}
      onClear={handleClear}
      postCard={postCard} 
      
      />
      <button className="darkMode" onClick={toggleDarkMode}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <Routes>
        {/*Home page board list */}
      <Route
        path="/"
        element={<Boards boards={searchedBoard ?? boards} onDelete={deleteBoard} />}
  />
    
      {/* single board showing cards*/}
      <Route
        path="/board/:boardId"
        element={<Cards />}
        />
      </Routes>
      <section className="Footer">2025 KudoBoard</section>
    </section>
  );
};

export default App;
