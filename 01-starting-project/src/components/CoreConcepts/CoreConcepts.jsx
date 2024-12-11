import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../../data-with-examples.js";
import Section from "../Section.jsx";

export default function CoreConcepts() {
  return (<Section id="core-concepts">
    <h2>Core Concepts</h2>
    <ul>
      {CORE_CONCEPTS.map((conceptItem) => (
        <CoreConcept key={conceptItem.title} {...conceptItem} />
      ))}
    </ul>
  </Section>);
}
