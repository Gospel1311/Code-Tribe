import { BrowserRouter, Routes, Route } from "react-router-dom";

import Section from "./components/firstcontent";
import CalendarLog from "./components/Calendarlogcomponents/calendarcomponent/calendar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/HabitPage" element={<Section />} />
        <Route path="/CalendarPage" element={<CalendarLog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;