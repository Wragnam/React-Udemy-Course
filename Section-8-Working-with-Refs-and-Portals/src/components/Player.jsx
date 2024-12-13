import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setSubmitted(false);
    setPlayerName(event.target.value);
  }

  function handleClick(){
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? playerName : "unknown entity"}</h2>
      <p>
        <input type="text" value={playerName} onChange={handleChange} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
