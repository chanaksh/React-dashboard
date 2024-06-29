import LogoLigth from "../assets/logo-black.png";
import { Link } from "react-router-dom";
import LogoDark from "../assets/logo-white.png";
import LogoWhite from "../assets/logo-black.png";
import { FaTable } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoBarChartSharp } from "react-icons/io5";
import { MdOutlineViewKanban } from "react-icons/md";
import "./leftSideBar.css";
import { FaGgCircle } from "react-icons/fa";
function LeftSideBar({ theme }) {
  return (
    <div className="leftbar-section">
      <div className="leftbar">
        <div className="logo-section">
          {theme == "dark" ? (
            <img width={"150px"} src={LogoDark} alt="" />
          ) : (
            <img width={"150px"} src={LogoWhite} alt="" />
          )}
        </div>

        <div className="dashboard-section">
          <FaGgCircle className="Fa" />
          <p>Dashboard</p>
        </div>

        <div className="option-section">
          <Link to="/" className="option">
            <FaTable className="option-logo" />
            <li>Tables</li>
          </Link>
          <Link to="/charts" className="option">
            <IoBarChartSharp className="option-logo" />
            <li>Charts</li>
          </Link>
          <Link to="/calender" className="option">
            <SlCalender className="option-logo" />
            <li>Calander</li>
          </Link>

          <Link to="/kanban" className="option">
            <MdOutlineViewKanban className="option-logo" />
            <li>kanban</li>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar;
