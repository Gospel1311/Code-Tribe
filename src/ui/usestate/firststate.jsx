import { useState } from "react";
import "./firststate.css";

const First = () => {
  const [habitGoal, setHabitGoal] = useState("");
  const [category, setCategory] = useState("Fitness");
  const [activities, setActivities] = useState([]);
  const [targets, setTargets] = useState({});
  const [frequency, setFrequency] = useState("Every day");

  const [location, setLocation] = useState("");
  const [reminderOn, setReminderOn] = useState(false);
  const [reminderTime, setReminderTime] = useState("07:00");

  const [startDate, setStartDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const [email, setEmail] = useState("");

  const habitOptions = {
    Fitness: [
      { name: "Skipping", unit: "skips", type: "count" },
      { name: "Running", unit: "kilometres", type: "distance" },
      { name: "Walking", unit: "minutes", type: "duration" },
      { name: "Push-ups", unit: "reps", type: "count" },
      { name: "Squats", unit: "reps", type: "count" },
      { name: "Workout", unit: "minutes", type: "duration" },
    ],

    Health: [
      { name: "Drink Water", unit: "glasses", type: "count" },
      { name: "Sleep", unit: "hours", type: "duration" },
      { name: "Eat Fruits", unit: "servings", type: "count" },
      { name: "Exercise", unit: "minutes", type: "duration" },
      { name: "Take Medicine", unit: "times", type: "count" },
    ],

    Productivity: [
      { name: "Deep Work", unit: "minutes", type: "duration" },
      { name: "Plan My Day", unit: "times", type: "count" },
      { name: "Complete Tasks", unit: "tasks", type: "count" },
      { name: "Read", unit: "pages", type: "count" },
      { name: "Journal", unit: "minutes", type: "duration" },
    ],

    Learning: [
      { name: "Read", unit: "pages", type: "count" },
      { name: "Study", unit: "minutes", type: "duration" },
      { name: "Practice Questions", unit: "questions", type: "count" },
      { name: "Watch a Lesson", unit: "minutes", type: "duration" },
      { name: "Practice a Skill", unit: "minutes", type: "duration" },
    ],

    Mindfulness: [
      { name: "Meditation", unit: "minutes", type: "duration" },
      { name: "Prayer", unit: "minutes", type: "duration" },
      { name: "Breathing Exercise", unit: "minutes", type: "duration" },
      { name: "Gratitude", unit: "entries", type: "count" },
      { name: "Journaling", unit: "minutes", type: "duration" },
    ],

    Personal: [
      { name: "Read", unit: "pages", type: "count" },
      { name: "Clean", unit: "minutes", type: "duration" },
      { name: "Skincare", unit: "times", type: "count" },
      { name: "Practice a Hobby", unit: "minutes", type: "duration" },
      { name: "Self-care", unit: "minutes", type: "duration" },
    ],
  };

  const selectedActivities = habitOptions[category].filter((activity) =>
    activities.includes(activity.name)
  );

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setActivities([]);
    setTargets({});
  };

  const handleActivityClick = (activity) => {
    setActivities((currentActivities) => {
      if (currentActivities.includes(activity.name)) {
        const newActivities = currentActivities.filter(
          (item) => item !== activity.name
        );

        setTargets((currentTargets) => {
          const newTargets = { ...currentTargets };
          delete newTargets[activity.name];
          return newTargets;
        });

        return newActivities;
      }

      return [...currentActivities, activity.name];
    });
  };

  const handleTargetChange = (activityName, value) => {
    setTargets((currentTargets) => ({
      ...currentTargets,
      [activityName]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!habitGoal.trim()) {
      alert("Please tell us what you are working towards.");
      return;
    }

    if (activities.length === 0) {
      alert("Please select at least one activity.");
      return;
    }

    if (!email.trim()) {
      alert("Please enter your email address.");
      return;
    }

    const missingTarget = selectedActivities.some(
      (activity) =>
        !targets[activity.name] || Number(targets[activity.name]) <= 0
    );

    if (missingTarget) {
      alert("Please set a target for every activity you selected.");
      return;
    }

    const newHabit = {
      goal: habitGoal,
      category: category,
      activities: selectedActivities.map((activity) => ({
        name: activity.name,
        target: Number(targets[activity.name]),
        unit: activity.unit,
      })),
      frequency: frequency,
      location: location,
      reminder: reminderOn
        ? {
            enabled: true,
            time: reminderTime,
          }
        : {
            enabled: false,
          },
      startDate: startDate,
      email: email,
    };

    console.log("New Habit:", newHabit);

    alert(
      "Your habit has been created successfully! Your habit details are ready."
    );
  };

  const handleCancel = () => {
    window.location.reload();
  };

  return (
    <div>
      <section className="create-habit-page">
        <div className="form-heading">
          <h1>Create a New Habit</h1>
          <p>
            Turn your goals into small actions you can track and complete.
          </p>
        </div>

        <section>
          <form className="HabitForm" onSubmit={handleSubmit}>

         

            <section className="Form">
              <label htmlFor="habitGoal">
                What are you working towards?
              </label>

              <input
                type="text"
                id="habitGoal"
                name="habitGoal"
                value={habitGoal}
                onChange={(event) => setHabitGoal(event.target.value)}
                placeholder="e.g. Become more fit"
              />
            </section>


          

            <section className="Category">
              <label htmlFor="category">
                Category
              </label>

              <select
                id="category"
                name="category"
                value={category}
                onChange={handleCategoryChange}
              >
                <option>Fitness</option>
                <option>Health</option>
                <option>Productivity</option>
                <option>Learning</option>
                <option>Mindfulness</option>
                <option>Personal</option>
              </select>
            </section>


           

            <fieldset className="ActivityGroup">
              <legend>What will you do?</legend>

              <p className="ActivityText">
                Choose one or more activities that will help you reach your
                goal.
              </p>

              <div className="Activity">
                {habitOptions[category].map((activity) => (
                  <button
                    type="button"
                    key={activity.name}
                    className={`ActivityBtn ${
                      activities.includes(activity.name) ? "active" : ""
                    }`}
                    onClick={() => handleActivityClick(activity)}
                  >
                    {activity.name}
                  </button>
                ))}
              </div>
            </fieldset>


          
            {selectedActivities.length > 0 && (
              <section className="Target">
                <div className="TargetHeading">
                  <h2>Set Your Targets</h2>

                  <p>
                    Decide how much you want to accomplish for each activity.
                  </p>
                </div>

                {selectedActivities.map((activity) => (
                  <div className="TargetItem" key={activity.name}>
                    <label htmlFor={`target-${activity.name}`}>
                      {activity.name}
                    </label>

                    <div className="TargetInput">
                      <input
                        type="number"
                        id={`target-${activity.name}`}
                        min="1"
                        value={targets[activity.name] || ""}
                        onChange={(event) =>
                          handleTargetChange(
                            activity.name,
                            event.target.value
                          )
                        }
                        placeholder="0"
                      />

                      <span>{activity.unit}</span>
                    </div>
                  </div>
                ))}
              </section>
            )}


            

            <section className="Category">
              <label htmlFor="frequency">
                Frequency
              </label>

              <select
                id="frequency"
                name="frequency"
                value={frequency}
                onChange={(event) => setFrequency(event.target.value)}
              >
                <option>Every day</option>
                <option>Weekdays</option>
                <option>Weekends</option>
                <option>Once a week</option>
              </select>
            </section>


            {/* LOCATION */}

            <fieldset className="locationgroup">
              <legend>Where?</legend>

              <div className="location">
                {[
                  "Home",
                  "Office",
                  "Outdoors",
                  "School",
                  "Custom",
                ].map((place) => (
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
                ))}
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
                  aria-label="Toggle reminder"
                >
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


            {/* START DATE */}

            <div className="Start">
              <label htmlFor="start-date">
                Start Date
              </label>

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


          

            <section className="Form">
              <label htmlFor="email">
                Your Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="e.g. you@example.com"
              />

              <p className="EmailText">
                We'll use this email to send your habit confirmation.
              </p>
            </section>


            {/* SUMMARY */}

            {activities.length > 0 && (
              <section className="HabitSummary">
                <h2>Your Habit Plan</h2>

                <p>
                  <strong>Goal:</strong> {habitGoal || "Your goal"}
                </p>

                <p>
                  <strong>Category:</strong> {category}
                </p>

                <div className="SummaryActivities">
                  {selectedActivities.map((activity) => (
                    <div
                      className="SummaryItem"
                      key={activity.name}
                    >
                      <span>{activity.name}</span>

                      <strong>
                        {targets[activity.name] || 0}{" "}
                        {activity.unit}
                      </strong>
                    </div>
                  ))}
                </div>
              </section>
            )}


            {/* ACTIONS */}

            <section className="Action">
              <button
                type="button"
                className="CancelBtn"
                onClick={handleCancel}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="CreateBtn"
              >
                Create Habit
              </button>
            </section>

          </form>
        </section>
      </section>
    </div>
  );
};

export default First;