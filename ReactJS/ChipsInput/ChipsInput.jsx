import React, { useState } from "react";
import "./styles.css";
function ChipsInput() {
  const [chips, setChips] = useState([]);

  function addChip(event) {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      setChips([...chips, event.target.value.trim()]);
      event.target.value = "";
    }
  }

  function removeChip(index) {
    setChips(chips.filter((_, i) => i !== index));
  }

  return (
    <div className="main-container">
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        className="input"
        onKeyDown={addChip}
      />

      <div className="chip-container">
        {chips.map((chip, index) => (
          <span key={index} className="chip">
            {chip}
            <button
              className="remove-btn"
              onClick={() => {
                removeChip(index);
              }}
            >
              X
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;
