import { createContext, useContext, useState } from "react";
import AccordianItem from "./AccordionItem";

const AccordianContext = createContext();

export function useAccordianContext() {
  const ctx = useContext(AccordianContext);

  if (!ctx) {
    throw new Error(
      "Accordian-related components should be wrapped by <Accordion>"
    );
  }

  return ctx;
}

export default function Accordian({ children, className }) {
  const [openItemId, setOpenItemId] = useState(null);

  function toggleItem(id) {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  }

  const contextValue = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordianContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordianContext.Provider>
  );
}

Accordian.Item = AccordianItem;
