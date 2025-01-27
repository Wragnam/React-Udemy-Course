import { useAccordionContext } from "./Accordion";
import { useAccordItemContext } from "./AccordionItem";

export default function AccordionTitle({ className, children }) {
  const { toggleItem } = useAccordionContext();
  const id = useAccordItemContext();

  return (
    <h3
      onClick={() => toggleItem(id)}
      className={`${className} clickable-header`}
    >
      {children}
    </h3>
  );
}
