import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Boards from "./Boards";

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
          throw new Error("Failed to delete board");
        }
        console.log(`Board with id ${id} deleted successfully.`);
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
        getOneBoard(searchTerm);
      } else{
        setSearchedBoard(null);
      }

    };
    // calls function for handling search to change UI
    handleSearch();
  }, [searchTerm]);

  const handleClear = () => {
    window.location.reload();
  };

  return (
    <section className="App">
      {/* <Routes>
        <Route path="/" element={<boards />}
        />

        <Route path="*" element={<NoMatch />} 
        /> 

      </Routes> */}
      <NavBar searchTerm={searchTerm} 
      setSearchTerm={setSearchTerm} 
      postBoard={postBoard}
      onClear={handleClear} />

      <Boards boards={ boards }/>
      <section className="Footer">2025 KudoBoard</section>
    </section>
  );
};

export default App;
