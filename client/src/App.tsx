import React from "react"
import {Routes, Route} from "react-router-dom";
import Sidebare from "./components/Sidebare";
import Notes from "./Pages/Notes.jsx";
import Createnote from "./Pages/Createnote.jsx";
import Calendar from "./Pages/Calendar.jsx"

function App() {
  return (
    <div className="flex">
     <Sidebare/>
      <Routes>
        <Route path="/" element={<Notes/>} />
        <Route path="/create" element={<Createnote/>} />
        <Route path="/calendar" element={<Calendar/>} />
      </Routes>
    </div>
  )
}

export default App
