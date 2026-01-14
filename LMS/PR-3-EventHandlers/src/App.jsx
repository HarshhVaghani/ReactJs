import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Try interacting with the elements");
  const [eventType, setEventType] = useState("None");

  // Event Handlers
  const handleClick = () => {
    setMessage("Button was clicked");
    setEventType("onClick");
  };

  const handleDoubleClick = () => {
    setMessage("Button was double clicked");
    setEventType("onDoubleClick");
  };

  const handleMouseEnter = () => {
    setMessage("Mouse entered the button");
    setEventType("onMouseEnter");
  };

  const handleMouseLeave = () => {
    setMessage("Mouse left the button");
    setEventType("onMouseLeave");
  };

  const handleKeyDown = (e) => {
    setMessage(`Key pressed: ${e.key}`);
    setEventType("onKeyDown");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFF0F5] to-[#007FFF]">
      <div className="bg-white/20 backdrop-blur-md p-8 rounded-xl w-96 text-center space-y-4 shadow-lg">
        
        <h1 className="text-3xl font-bold text-black">
          React Event Handler
        </h1>

        <p className="text-md text-black/80">
          Current Event: <span className="font-semibold">{eventType}</span>
        </p>

        {/* Button Events */}
        <button
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="w-full py-3 bg-[#00555A] text-white rounded-lg hover:bg-[#003f42] transition"
        >
          Interact With Me
        </button>

        {/* Keyboard Event */}
        <input
          type="text"
          placeholder="Type here to trigger key events..."
          onKeyDown={handleKeyDown}
          className="w-full px-3 py-2 rounded-lg outline-none text-black"
        />

        {/* Output */}
        <div className="bg-white/30 rounded-lg p-3">
          <p className="text-sm font-medium text-[#003f42]">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
