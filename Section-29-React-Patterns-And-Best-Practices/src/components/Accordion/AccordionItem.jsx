import { useAccordianContext } from "./Accordion";

export default function AccordianItem({ id, className, title, children }) {
  const { openItemId, toggleItem } = useAccordianContext();

  const isOpen = openItemId === id;

  return (
    <li className={className}>
      <h3 onClick={() => toggleItem(id)} className="clickable-header">
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
