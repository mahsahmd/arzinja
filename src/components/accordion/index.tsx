import React, { useState } from "react";
import { AccordionTitle, Content } from "./styles";

const Accordion = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <AccordionTitle onClick={() => setIsOpen((state) => !state)}>
        {title}
      </AccordionTitle>
      <Content show={isOpen ? 1 : 0}>{children}</Content>
    </>
  );
};

export default Accordion;
