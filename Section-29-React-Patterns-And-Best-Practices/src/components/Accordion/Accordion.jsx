import { createContext, useContext, useState } from "react";

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

  function openItem(id) {
    setOpenItemId(id);
  }

  function closeItem() {
    setOpenItemId(null);
  }

  const contextValue = {
    openItemId,
    openItem,
    closeItem,
  };

  return (
    <AccordianContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordianContext.Provider>
  );
}
