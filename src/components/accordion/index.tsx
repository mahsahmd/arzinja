import React, { useState, ReactNode } from "react";
import { AccordionTitle, Content } from "./styles";

interface AccordionProps {
  children: ReactNode;
  title: string;
}
const Accordion = ({ children, title }: AccordionProps) => {
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
