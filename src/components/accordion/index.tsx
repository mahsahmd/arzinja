import React, { useState, ReactNode } from "react";
import { AccordionTitle, AccordionTitleSection, Content } from "./styles";
import ChevronDown from "@/components/icons/ChevronDown";
interface AccordionProps {
  children: ReactNode;
  title: string;
}
const Accordion = ({ children, title }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <AccordionTitleSection onClick={() => setIsOpen((state) => !state)}>
        <AccordionTitle>{title}</AccordionTitle>
        <ChevronDown />
      </AccordionTitleSection>

      <Content show={isOpen ? 1 : 0}>{children}</Content>
    </>
  );
};

export default Accordion;
