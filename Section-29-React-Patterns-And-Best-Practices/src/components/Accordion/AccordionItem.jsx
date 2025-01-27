import { useAccordianContext } from "./Accordion";

export default function AccordianItem({ id, className, title, children }) {
  const { openItemId, openItem, closeItem } = useAccordianContext();

  const isOpen = openItemId === id;

  function handleClick() {
    if (isOpen) {
      closeItem();
    } else {
      openItem(id);
    }
  }

  return (
    <li className={className}>
      <h3 onClick={handleClick} className="clickable-header">
        {title}
      </h3>
      <div
        className={
          isOpen ? "accordion-item-content open" : "accordion-item-content"
        }
      >
        {children}
      </div>
    </li>
  );
}
