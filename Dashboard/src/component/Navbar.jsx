import "./Navbar.css";
import Searchwhite from "../assets/search-w.png";
import Searchblack from "../assets/search-b.png";
import Day from "../assets/day.png";
import Night from "../assets/night.png";

function Navbar({ handelClick, theme }) {
  return (
    <div className="navbar">
      <h1>Dashboard</h1>
      <div className="input-section">
        <label htmlFor="search">
          <img src={Searchblack} alt="" />
        </label>
        <input type="text" id="search" />
      </div>

      {theme == "dark" ? (
        <img className="Theme" src={Day} alt="" onClick={() => handelClick()} />
      ) : (
        <img
          className="Theme"
          src={Night}
          alt=""
          onClick={() => handelClick()}
        />
      )}
    </div>
  );
}

export default Navbar;
