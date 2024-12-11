import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  let playerInfo = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerInfo = (
      <input type="text" required value={name} onChange={handleChange}></input>
    );
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <li>
      <span className="player">
        {playerInfo}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEditing((editing) => !editing)}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
