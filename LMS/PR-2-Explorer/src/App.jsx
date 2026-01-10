import React from 'react'
import Header from "./Components/Header";
import Card from "./Components/Card";
import "./App.jsx";
import Dropdown from "./Components/DropDown";

const App = () => {
  return (
     <div className="min-h-screen bg-slate-800 p-4 space-y-4">
      <Header />
      <Card />
      <Dropdown/>
    </div>
  )
}

export default App