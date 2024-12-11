import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts/CoreConcepts.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

import { CORE_CONCEPTS } from "./data.js";

function App() {
  const [ selectedTopic, setSelectedTopic] = useState('Please click a button');


  function handleSelect(selectedButton) {
    //selectedButton is a string with the name of the button clicked
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  console.log("Rendering App component...");

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
