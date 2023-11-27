import React from "react";
import {
  ActiveOrdersItem,
  ActiveOrdersList,
  ActiveOrdersTab,
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
            <OrderName>{order.product}</OrderName>
            <Status status={order.status}></Status>
          </ActiveOrdersItem>
        ))}
      </ActiveOrdersList>
    </ActiveOrdersTab>
  );
};

export default ActiveOrders;
