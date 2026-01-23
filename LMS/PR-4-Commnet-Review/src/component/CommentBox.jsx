import { useState } from "react";

const moods = [
  { label: "Happy", emoji: "😄", color: "#f4ed3" },
  { label: "Neutral", emoji: "😐", color: "#f4ed3" },
  { label: "Frustrated", emoji: "😤", color: "#f4ed3" },
  { label: "Confused", emoji: "🤯", color: "#f4ed3" },
];

export default function MoodCommentBox() {
  const [mood, setMood] = useState(moods[0]);
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = () => {
    if (!text.trim()) return;
    setComments([...comments, { id: Date.now(), mood, text }]);
    setText("");
  };

  const deleteComment = (id) =>
    setComments(comments.filter((c) => c.id !== id));

  return (
    <div className="max-w-lg w-full p-6 rounded-2xl shadow-xl bg-[#f4ed3]">
      <h2 className="text-2xl font-semibold text-[#90353d] mb-4">
        💬 Mood Feedback
      </h2>

      <div className="flex gap-2 mb-4 flex-wrap">
        {moods.map((m) => (
          <button
            key={m.label}
            onClick={() => setMood(m)}
            className={`px-3 py-1 rounded-full text-sm border transition
              ${
                mood.label === m.label
                  ? "bg-[#90353d] text-white"
                  : "bg-white text-[#90353d]"
              }`}
          >
            {m.emoji} {m.label}
          </button>
        ))}
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Say it out loud… we won’t judge 👀"
        rows={3}
        className="w-full p-3 border rounded-xl outline-none
          focus:ring-2 focus:ring-[#90353d]"
      />

      <button
        onClick={addComment}
        className="w-full mt-3 bg-[#90353d] text-white py-2 rounded-xl
          hover:opacity-90 transition"
      >
        Add Feedback
      </button>

      <div className="mt-4 space-y-3">
        {comments.length === 0 && (
          <p className="text-sm text-[#90353d] text-center opacity-70">
            No feedback yet 🌱
          </p>
        )}

        {comments.map((c) => (
          <div
            key={c.id}
            className="p-5 rounded-2xl shadow-md flex justify-between
              bg-white"
          >
            <div>
              <p className="font-medium text-sm text-[#90353d]">
                {c.mood.emoji} {c.mood.label}
              </p>
              <p className="text-sm mt-1 text-gray-700">{c.text}</p>
            </div>

            <button
              onClick={() => deleteComment(c.id)}
              className="text-[#90353d] text-sm hover:scale-110 transition"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
