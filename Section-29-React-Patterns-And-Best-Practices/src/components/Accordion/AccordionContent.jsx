import { useAccordionContext } from "./Accordion";

export default function AccordionContent({ children, className, id }) {
  const { openItemId } = useAccordionContext();

  const isOpen = openItemId === id;

  return (
    <div
      className={
        isOpen ? `${className ?? ""} open` : `${className ?? ""} close`
      }
    >
      {children}
    </div>
  );
}
