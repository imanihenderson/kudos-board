import "./NavBar.css";
import SearchBar from "./SearchBar";
import SortBy from "./SortBy";
import CreateNewBoard from "./CreateNewBoard"
import { Link } from "react-router-dom";

const NavBar = ({
  searchTerm,
  setSearchTerm,
  onClear,
  postBoard,
  postCard,
  celebrationSort,
  thankyouSort,
  inspirationSort,
  handleClear

}) => {
  return (
    <nav className="NavBar">


      <Link to={`/`}>
          <h1 className="SiteTitle">Kudos</h1>
      </Link>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onClear={onClear}
      />

      <section className="SortHolder">
        <SortBy 
        celebrationSort={celebrationSort}
        thankyouSort={thankyouSort}
        inspirationSort={inspirationSort}
        handleClear={handleClear}

        />

        <CreateNewBoard 
        postBoard={postBoard}
        />


      </section>

    </nav>
  );
};

export default NavBar;