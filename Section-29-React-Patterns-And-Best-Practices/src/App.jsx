import Accordian from "./components/Accordion/Accordion";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordian className="accordion">
          <Accordian.Item
            id="experience"
            className="accordion-item"
            title="We got 20 years of experience"
          >
            <article>
              <p>You can&apos;t go wrong with us.</p>
              <p>
                We are in the business of planning highly individualized
                vacation trips for more than 20 years
              </p>
            </article>
          </Accordian.Item>
          <Accordian.Item
            id="local-guides"
            className="accordion-item"
            title="We're working with local guides"
          >
            <article>
              <p>We are not doing this alone from our office.</p>
              <p>
                Instead we are working with local guides to ensure a safe and
                pleasant vacation
              </p>
            </article>
          </Accordian.Item>
        </Accordian>
      </section>
    </main>
  );
}

export default App;
