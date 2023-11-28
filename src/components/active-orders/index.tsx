import React from "react";
import {
  ActiveOrdersItem,
  ActiveOrdersList,
  ActiveOrdersTab,
  ActiveOrdersTitle,
  OrderName,
} from "./styles";
import Status from "./Status";
import { Order } from "./activeOrders.types";

interface ActiveOrders {
  orders: Order[] | null;
}
const ActiveOrders = ({ orders }: ActiveOrders) => {
  return (
    <ActiveOrdersTab>
      <ActiveOrdersList>
        {orders?.map((order) => (
          <ActiveOrdersItem key={order.id}>
            <ActiveOrdersTitle>Product</ActiveOrdersTitle>
            <ActiveOrdersTitle>Amount</ActiveOrdersTitle>
            <ActiveOrdersTitle>Status</ActiveOrdersTitle>
            <OrderName>{order.product}</OrderName>
            <OrderName>{order.amount}</OrderName>
            <Status status={order.status}></Status>
          </ActiveOrdersItem>
        ))}
      </ActiveOrdersList>
    </ActiveOrdersTab>
  );
};

export default ActiveOrders;
