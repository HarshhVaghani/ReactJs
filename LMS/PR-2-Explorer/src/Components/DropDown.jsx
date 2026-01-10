import { useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-48">
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-slate-800 text-white px-3 py-2 text-sm rounded border border-gray-600 flex justify-between items-center"
      >
        Select option
        <span>▾</span>
      </button>

      {open && (
        <div className="absolute text-white mt-1 w-full bg-slate-900 border border-gray-700 rounded text-sm">
          <div className="px-3 py-2 hover:bg-slate-800 cursor-pointer">
            Option 1
          </div>
          <div className="px-3 py-2 hover:bg-slate-800 cursor-pointer">
            Option 2
          </div>
          <div className="px-3 py-2 hover:bg-slate-800 cursor-pointer">
            Option 3
          </div>
        </div>
      )}
    </div>
  );
}
