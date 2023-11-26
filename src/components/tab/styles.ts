import styled from "styled-components";

interface TabComponentProps {
  isactive: string;
}
export const TabComponent = styled.div<TabComponentProps>`
  background-color: #fff;
  width: 200px;
  height: 48px;
  color: ${(props) => (props.isactive === "true" ? "#1976d2" : "#939393")};
  border-bottom: ${(props) => props.isactive === "true" && `4px solid #1976d2`};
  font-weight: 700;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
