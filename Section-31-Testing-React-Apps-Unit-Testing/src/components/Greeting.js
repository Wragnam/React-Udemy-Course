import { useState } from "react";
import Output from "./Output";

export default function Greeting() {
  const [changedText, setChangedText] = useState(false);

  function handleTextHandler() {
    setChangedText(true);
  }

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <Output>It's good to see you.</Output>}
      {changedText && <p>Changed</p>}
      <button onClick={handleTextHandler}>Change Text</button>
    </div>
  );
}
