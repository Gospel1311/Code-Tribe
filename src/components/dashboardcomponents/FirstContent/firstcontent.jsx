// import Sidebar from "../Sidebar/sidebar"
import "./firstcontent.css"
import Checklist from "../Checklist/checklist"
const section = () => {
    return(
        <div>

            <main className="content">
            
                <section className="morning">
                    <h1>Good Morning, Alex!</h1>
                    <p> Here's your progress for today. </p>
                </section>

                <section className="cards">
                    <main className="Todayscard">
                        <h3>Today's Progress</h3>
                        <p>0 of 6 habits completed</p>
                    </main>
                    <main className="streakcard">
                        <p>current streak</p>
                        <h3>0 days</h3>
                    </main>
                    <main className="beststreakcard">
                        <p>Best Streak</p>
                        <h3>0 Days</h3>
                    </main>
                </section>
            </main>

            <Checklist />

        </div>
    )
}

export default section;