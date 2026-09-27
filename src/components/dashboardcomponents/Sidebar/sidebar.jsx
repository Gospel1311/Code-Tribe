import { Calendar, ChartNoAxesColumnIncreasing, Cog, House, LayoutList } from "lucide-react";
import "./sidebar.css"

const sidebar = () => {
    return(
        <div>

            <main className="dashboard">
            <section className="dashboard-content">

            <section className="house">
                <House />
                <h3> Dashboard </h3>
                
            </section>

            <section className="layout-list">
            <LayoutList />
            <h3>My Habits</h3>
            </section>

            <section className="calendar">
                <Calendar />
                <h3>Calendar</h3>
            </section>

            <section className="progress">
                <ChartNoAxesColumnIncreasing />
                <h3>Progress</h3>
            </section>

            <section className="cog">
                <Cog />
                <h3>Settings</h3>
            </section>
            </section>

            <section className="help">
                <h3>Help & Support</h3>
            </section>

            </main>
        </div>
    )
}

export default sidebar;