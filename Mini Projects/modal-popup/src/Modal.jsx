function Modal({ bg, close }) {
  return (
    <div className="overlay" onClick={close}>
      <div
        className="modal"
        style={{ backgroundColor: bg }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Surprise 🎉</h2>
        <p>This color was randomly generated!</p>

        <button className="close-btn" onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
