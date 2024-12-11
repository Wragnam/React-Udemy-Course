import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

    let playerInfo = <span className="player-name">{name}</span>;

    if(isEditing){
        playerInfo = <input type="text" required placeholder="Enter name"></input>;
    }

  return (
    <li>
      <span className="player">
        {playerInfo}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={()=>setIsEditing(!isEditing)}>
        {isEditing ? "Save":"Edit"}
      </button>
    </li>
  );
}
