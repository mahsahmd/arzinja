import styled from "styled-components";

export const ActiveOrdersTab = styled.div``;

export const ActiveOrdersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
`;

export const ActiveOrdersItem = styled.div`
  display: flex;
  gap: 16px;
  border: 1px solid #e6e6e6;
  padding: 16px 8px;
  border-radius: 5px;
  align-items: center;
`;

export const OrderName = styled.p`
  color: #404040;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
`;

interface OrderStatusProps {
  status: string;
}
export const OrderStatus = styled.p<OrderStatusProps>`
  background-color: ${(props) =>
    props.status === "pending"
      ? "#ff7f27"
      : props.status === "in-proccess"
      ? "#5bc0de"
      : props.status === "delivery"
      ? "#ed1c24"
      : props.status === "delivered"
      ? "#2b543a"
      : "#404040"};
  color: #fff;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
  border-radius: 5px;
  padding: 4px;
`;
