import "./SortBy.css"
   

const SortBy = ({celebrationSort, thankyouSort, inspirationSort, handleClear}) => {
  const handleSortChange = (e) => {
    const value = e.target.value;

    if (value === "Celebration") {
      celebrationSort();
    } else if (value === "thankYou") {
      thankyouSort();
    } else if (value === "Inspiration") {
      inspirationSort();
    } else if (value === "All Boards") {
      handleClear();
    }
  };
  
  

    return (
        <section className="SortBy">
            <label htmlFor="sort" className="SortLabel">
        Sort:
      </label>
      <select className="Sort" name="sort" onChange={handleSortChange}>
        <option value="All Boards">All Boards</option>
        <option value="Recent">Recent Boards</option>
        <option value="Celebration">Celebration</option>
        <option value="thankYou">Thank You</option>
        <option value="Inspiration">Inspiration</option>
      </select>

        </section>
    )
}
    


export default SortBy;