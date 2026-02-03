import { useState } from "react";
import Modal from "./Modal";
import "./App.css";


const colors = ["#ff6b6b", "#4ecdc4", "#ffe66d", "#6c5ce7"];

function App() {
  const [show, setShow] = useState(false);
  const [bg, setBg] = useState("");

  const openModal = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBg(randomColor);
    setShow(true);
  };

  return (
    <div className="app">
      <h1>🎨 Color Reveal Modal</h1>

      <button className="open-btn" onClick={openModal}>
        Reveal Color
      </button>

      {show && <Modal bg={bg} close={() => setShow(false)} />}
    </div>
  );
}

export default App;
