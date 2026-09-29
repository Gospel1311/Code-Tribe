import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";

function CalendarLog() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = (date) => {
    return date.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="calendar-log">
      <div className="calendar-header">
        <div>
          <h2>Calendar Log</h2>
          <p>Keep track of your daily habits.</p>
        </div>
      </div>

      <div className="calendar-card">
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          prev2Label={null}
          next2Label={null}
          calendarType="iso8601"
        />
      </div>

      <div className="selected-date-card">
        <h3>{formatDate(selectedDate)}</h3>
        <p>Your habit log for this day</p>

        <div className="empty-log">
          <p>No habits recorded for this date yet.</p>
        </div>
      </div>
    </div>
  );
}

export default CalendarLog;