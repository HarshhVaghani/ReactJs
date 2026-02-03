
import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="container">
      <div className="card">
        <h2>Character Counter Using Input Events</h2>

        <textarea
          placeholder="Type here I’m counting...."
          onChange={(e) => setText(e.target.value)}
        />

        <div className="counter">
          <span>Characters Count:</span>
          <span className="count">{text.length}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
