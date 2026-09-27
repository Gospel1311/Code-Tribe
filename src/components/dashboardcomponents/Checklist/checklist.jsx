import "./checklist.css"
const checklist = () => {
    return(
        <div>

            <table className="TodaysHabit">
                 <tr>
                <main className="Habit">
                   
<section className="Habitcontent">
    <h2>Today's Habit</h2>
    <p>6 habits . 0 completed</p>
</section>
<section className="addbutton">
    <button> 
        + Add Habit</button>
</section>
 
</main>
 </tr>

<section className="HabitList">
  
    <tr>
         <section className="flexdisplay">
        <main>
        <td> Drink 8 glasses of water</td>
        <p>8:00AM - Daily</p>
        </main>
        <input type="checkbox" />
          </section>
         </tr>
 


    <tr>
        <section className="flexdisplay">
            <main>
        <td> Exercise for 30 minutes</td>
        <p>7:00AM - Mon, Wed, Fri</p>
        </main>
        <input type="checkbox" />
        </section>
    </tr>


    <tr>
        <section className="flexdisplay">
            <main>
        <td> Read for 20 minutes</td>
        <p>8:00PM - Daily</p>
        </main>
        <input type="checkbox" />
        </section>
    </tr>


    <tr>
         <section className="flexdisplay">
            <main>
        <td> Meditate</td>
        <p>9:00AM - Daily</p>
       </main>
        <input type="checkbox" />
        </section>
    </tr>


    <tr>
        <section className="flexdisplay">
            <main>
        <td> Eat healthy meals</td>
        <p>All day - Daily</p>
        </main>
        <input type="checkbox" />
        </section>
    </tr>


    <tr>
         <section className="flexdisplay">
            <main>
        <td> Journal</td>
        <p>9:00PM - Daily</p>
        </main>
        <input type="checkbox" />
        </section>
    </tr>
    </section>

    
            </table>

<section className="keepgoing">
        <div className="content">
        <h3>Keep Going!</h3>
        <p>You're doing great. just continue</p>
        </div>
    </section>
    
        </div>
    )
}

export default checklist;