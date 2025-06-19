import "./NavBar.css";
import SearchBar from "./SearchBar";
import SortBy from "./SortBy";
import CreateNewBoard from "./CreateNewBoard"
import CreateNewCard from "./CreateNewCard"

const NavBar = ({
  searchTerm,
  setSearchTerm,
  onClear,
  postBoard,
  postCard

}) => {
  return (
    <nav className="NavBar">

      <h1 className="SiteTitle">Kudos</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onClear={onClear}
      />

      <section className="SortHolder">
        <SortBy 
        />

        <CreateNewBoard 
        postBoard={postBoard}
        />

        <CreateNewCard
        postCard={postCard}
        />

      </section>

    </nav>
  );
};

export default NavBar;