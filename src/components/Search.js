import { AiOutlineSearch } from "react-icons/ai";

export default function Search() {
  return (
    <div className="search-page">
      <h2>search for a room</h2>
      <form action="">
        <input type="text" placeholder="Enter Surburb/Location" />
        <br />
        <button type="submit">
          <AiOutlineSearch className="search-icon" />
          Search
        </button>
      </form>
    </div>
  );
}
