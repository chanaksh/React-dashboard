import "./Calender.css";
import { useState } from "react";
import FullCalender from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGirdPlugin from "@fullcalendar/timegrid";
import interaction from "@fullcalendar/interaction";
function Calender() {
  const [ALLevent, setEvent] = useState([]);
  const handelClick = (arg) => {
    let eventName = prompt("enter the event");
    if (eventName != null) {
      let variable = { title: eventName, date: arg.dateStr };
      setEvent([...ALLevent, variable]);
    }
  };
  return (
    <div className="calender-section">
      <div className="calender" style={{ width: "80%" }}>
        <h1 className="heading">Calender</h1>
        <FullCalender
          plugins={[dayGridPlugin, timeGirdPlugin, interaction]}
          initialView="dayGridMonth"
          headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth ,timeGridWeek ,timeGridDay",
          }}
          dateClick={handelClick}
          events={ALLevent}
          height={500}
        />
      </div>
    </div>
  );
}

export default Calender;
