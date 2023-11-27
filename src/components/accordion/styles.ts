import styled, { keyframes } from "styled-components";

export const AccordionTitle = styled.p`
  color: #333;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
`;

interface ContentProps {
  show: number;
}

const animation = keyframes`
    from {
    height: 0;
  }
  to {
    height: auto;
  }
`;

export const Content = styled.div<ContentProps>`
  max-height: ${(props) => (props.show ? "300px" : "0")};
  overflow: hidden;
  transition: all 0.5s ease-in-out;
`;
