import styled from "styled-components";

export const ActiveOrdersTab = styled.div``;

export const ActiveOrdersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
`;

export const ActiveOrdersItem = styled.div`
  border: 1px solid #e7e7eb;
  padding: 16px 8px;
  border-radius: 8px;
  align-items: center;
  background-color: #f7f7fa;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export const ActiveOrdersTitle = styled.div`
  color: #9499be;
  font-size: 14px;
  font-weight: 600;
`;
export const OrderName = styled.p`
  color: #5e617d;
  font-size: 12px;
  font-weight: 600;
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
  max-width: 80px;
  text-align: center;
`;
