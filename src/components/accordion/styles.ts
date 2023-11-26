import styled, { keyframes } from "styled-components";

export const AccordionTitle = styled.p`
  color: #333;
  cursor: pointer;
  font-size: 16px;
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
  height: ${(props) => (props.show ? "auto" : "0")};
  display: ${(props) => (props.show ? "block" : "none")};
  /* animation: ${animation} 0.5s ease-in-out; */
`;
