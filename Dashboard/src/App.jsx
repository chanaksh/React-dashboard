import "./App.css";
import LeftSideBar from "./component/LeftSideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tabels from "./component/Tables";
import Charts from "./component/Charts";
import Navbar from "./component/Navbar";
import Kanban from "./component/Kanban";
import Calender from "./component/Calender";
import { useState } from "react";
function App() {
  const [theme, setTheme] = useState("dark");
  const handelClick = () => {
    if (theme == "dark") {
      document.querySelector("body").classList.remove("dark");
      document.querySelector("body").classList.add("light");
      setTheme("light");
    } else {
      document.querySelector("body").classList.remove("light");
      document.querySelector("body").classList.add("dark");
      setTheme("dark");
    }
  };
  return (
    <Router>
      <div className="main-div">
        <LeftSideBar theme={theme} />
        <Navbar handelClick={handelClick} theme={theme} />
        <Routes>
          <Route path="/" element={<Tabels />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/kanban" element={<Kanban />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
