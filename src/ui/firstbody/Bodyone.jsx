import "./Bodyone.css"

const One = () => {
    return(
        <div>
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
    placeholder="e.g. Become more fit" />

    <section className="Category">
  <label htmlFor="category">
    Category
  </label>

  <select
    id="category"
    name="category"
    value={category}
    onChange={(event) => {
      setCategory(event.target.value);
      setActivities([]);
    }}
    >
    <option>Fitness</option>
    <option>Health</option>
    <option>Productivity</option>
    <option>Learning</option>
    <option>Mindfulness</option>
    <option>Personal</option>
  </select>
</section>
</section>
        </div>
    )
}

export default One;