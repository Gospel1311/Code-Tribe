import { useState } from "react";
import "./firstcontent.css" 

const content = () => {
  const [location, setLocation] = useState("");
  const [reminderOn, setReminderOn] = useState(true);
const [reminderTime, setReminderTime] = useState("07:00");
const [startDate, setStartDate] = useState(
  new Date().toISOString().slice(0, 10)
);
     const handleSubmit = (event) => {
  event.preventDefault();

  alert("Habit form submitted successfully!");
};

        
     
    return(
        <div>

    <section className="create-habit-page">
      <div className="form-heading">
        <h1>Create a New Habit</h1>
        <p>Build a habit that fits your goals and lifestyle.</p>
      </div>
      

      <section>
        <form className="HabitForm" onSubmit={handleSubmit}>
            <section className="Form">
                <label htmlFor="habitName"> 
                    Habit Name
                     </label>
                <input 
                type="text" 
                id="habitName" 
                name="habitName" 
                placeholder=" e.g Exercise for 30 minutes "
                />
            </section>

            <section className="Category">
                <label htmlFor="category">
                    Category
                </label>
                <select id="category" name="category" defaultValue="Fitness">
            <option>Fitness</option>
            <option>Health</option>
            <option>Productivity</option>
            <option>Learning</option>
            <option>Mindfulness</option>
            <option>Personal</option>
          </select>

          <label htmlFor="frequency" className="frequency">Frequency</label>
          <select
            id="frequency"
            name="frequency"
            defaultValue="Every day">
            <option>Every day</option>
            <option>Weekdays</option>
            <option>Weekends</option>
            <option>Once a week</option>
          </select>

<section  className="Form">
  <label htmlFor="goal" className="goal">Goal</label>
          <input
            type="text"
            id="goal"
            name="goal"
            placeholder="e.g. 30 minutes"
          />
          </section>


<fieldset className="locationgroup">
          <legend>Where?</legend>

          <div className="location">
            {["Home", "Office", "Outdoors", "School", "Custom"].map(
              (place) => (
                <button
                  type="button"
                  key={place}
                  className={`location-option ${
                    location === place ? "active" : ""
                  }`}
                  onClick={() => setLocation(place)}
                >
                  {place}
                </button>
              )
            )}
          </div>
        </fieldset>


      
<section className="Reminder">
  <section className="ReminderHeading">
    <span>Reminder</span>

    <button
      type="button"
      className={`reminder-toggle ${
        reminderOn ? "is-on" : "is-off"
      }`}
      onClick={() => setReminderOn(!reminderOn)}
      aria-pressed={reminderOn}
      aria-label="Toggle reminder">
      <span className="toggle-circle"></span>
    </button>
  </section>

  {reminderOn && (
    <input
      type="time"
      className="InputTime"
      value={reminderTime}
      onChange={(event) =>
        setReminderTime(event.target.value)
      }
      aria-label="Reminder time"
    />
  )}
</section>

<div className="Start">
  <label htmlFor="StartDate">Start Date</label>

  <input
    type="date"
    id="start-date"
    className="InputDate"
    value={startDate}
    onChange={(event) =>
      setStartDate(event.target.value)
    }
  />
</div>
            </section>

  
<section className="Action">
  <button
    type="button"
    className="CancelBtn"
    onClick={() => window.location.reload()}> Cancel </button>

  <button
    type="submit"
    className="CreateBtn"> Create Habit </button>
</section>
        </form>
      </section>
      </section>  

        </div>
    )
}

export default content;