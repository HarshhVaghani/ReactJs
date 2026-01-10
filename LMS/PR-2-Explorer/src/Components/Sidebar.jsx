export default function Sidebar() {
  return (
    <aside className="w-52 border-r border-gray-700 p-2 text-white">
      <p className="text-xs text-gray-400 mb-2">FILES</p>

      <div className="space-y-1 text-sm">
        <div className="hover:bg-slate-800 px-2 py-1 rounded cursor-pointer">
          📁 src
        </div>
        <div className="hover:bg-slate-800 px-2 py-1 rounded cursor-pointer">
          📄 App.jsx
        </div>
        <div className="hover:bg-slate-800 px-2 py-1 rounded cursor-pointer">
          📄 main.jsx
        </div>
      </div>
    </aside>
  );
}
