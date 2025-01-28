import { useState } from "react";

export default function Greeting() {
  const [changedText, setChangedText] = useState(false);

  function handleTextHandler() {
    setChangedText(true);
  }

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <p>It's good to see you.</p>}
      {changedText && <p>Changed</p>}
      <button onClick={handleTextHandler}>Change Text</button>
    </div>
  );
}
