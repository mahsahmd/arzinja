import styled from "styled-components";

export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 24px;
`;
export const ProductItem = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
export const ProductName = styled.div`
  min-width: 200px;
  font-size: 16px;
  font-weight: 500;
  color: #656e88;
`;
export const BuyButton = styled.button`
  border-radius: 5px;
  background-color: #1976d2;
  width: 100px;
  height: 32px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #1976d2cf;
  }
`;
