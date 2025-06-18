import "./SortBy.css"
   

const SortBy = () => {

    return (
        <section className="SortBy">
            <label htmlFor="sort" className="SortLabel">
        Sort:
      </label>
      <select className="Sort" name="sort">
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