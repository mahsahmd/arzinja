import styled from "styled-components";

export const AccordionTitleSection = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f3f3f3;
`;
export const AccordionTitle = styled.p`
  color: #333;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  padding: 8px;
  min-width: 120px;
`;

interface ContentProps {
  show: number;
}

export const Content = styled.div<ContentProps>`
  max-height: ${(props) => (props.show ? "300px" : "0")};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`;
