import React, { memo } from "react";
import { OrderStatus } from "./styles";
import { StatusType } from "./activeOrders.types";

const statuses: StatusType[] = [
  "pending",
  "in-proccess",
  "delivery",
  "delivered",
];

interface StatusProps {
  status: StatusType;
}
const Status = memo(({ status }: StatusProps) => {
  return <OrderStatus status={status}>{status}</OrderStatus>;
});

Status.displayName = "Status";

export default Status;
