import styled from "styled-components";

export const MapModalContent = styled.div`
  @media screen and (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 400px;
`;
export const SelectLocationButton = styled.button`
  border-radius: 5px;
  background-color: #1976d2;
  height: 38px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 16px;
  &:hover {
    background-color: #1976d2cf;
  }
`;
