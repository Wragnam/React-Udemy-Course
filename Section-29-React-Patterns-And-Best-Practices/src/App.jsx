import Accordian from "./components/Accordion/Accordion";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordian className="accordion">
          <Accordian.Item className="accordion-item">
            <Accordian.Title id="experience" className="accordion-item-title">
              We got 20 years of experience
            </Accordian.Title>
            <Accordian.Content
              id="experience"
              className="accordion-item-content"
            >
              <article>
                <p>You can&apos;t go wrong with us.</p>
                <p>
                  We are in the business of planning highly individualized
                  vacation trips for more than 20 years
                </p>
              </article>
            </Accordian.Content>
          </Accordian.Item>
          <Accordian.Item className="accordion-item">
            <Accordian.Title id="local-guides" className="accordion-item-title">
              We're working with local guides
            </Accordian.Title>
            <Accordian.Content
              id="local-guides"
              className="accordion-item-content"
            >
              <article>
                <p>We are not doing this alone from our office.</p>
                <p>
                  Instead we are working with local guides to ensure a safe and
                  pleasant vacation
                </p>
              </article>
            </Accordian.Content>
          </Accordian.Item>
        </Accordian>
      </section>
    </main>
  );
}

export default App;
