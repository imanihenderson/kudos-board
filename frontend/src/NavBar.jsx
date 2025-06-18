import "./NavBar.css";
import SearchBar from "./SearchBar";
import SortBy from "./SortBy";
import CreateNew from "./CreateNew"

const NavBar = ({
  searchTerm,
  setSearchTerm,
  onClear,
  postBoard

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

        <CreateNew 
        postBoard={postBoard}
        />

      </section>

    </nav>
  );
};

export default NavBar;