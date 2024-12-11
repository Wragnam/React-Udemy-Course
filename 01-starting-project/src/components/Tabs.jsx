import React from "react";

export default function Tabs({ children, buttons, ButtonsContainer }) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
