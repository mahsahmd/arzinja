import React from "react";
import {
  ActiveOrdersItem,
  ActiveOrdersList,
  ActiveOrdersTab,
  ActiveOrdersTitle,
  OrderName,
} from "./styles";
import Status from "./Status";
// import { useOrderService } from "@/services/use-order-service";
import { OrdersData } from "@/constants/mockData";

const ActiveOrders = () => {
  // const { data } = useOrderService();
  const data = OrdersData;
  return (
    <ActiveOrdersTab>
      <ActiveOrdersList>
        {data?.orders?.map((order) => (
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
