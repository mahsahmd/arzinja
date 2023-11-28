import React, { useState, useEffect, memo } from "react";
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
  const [orderStatus, setOrderStatus] = useState<StatusType>(status);
  const getNextOrderStatus = (currentStatus: StatusType): StatusType => {
    const currentIndex = statuses.indexOf(currentStatus);
    const nextIndex = (currentIndex + 1) % statuses.length;
    return statuses[nextIndex];
  };
  useEffect(() => {
    if (orderStatus !== "delivered") {
      const intervalId = setInterval(() => {
        setOrderStatus((prevStatus) => getNextOrderStatus(prevStatus));
      }, 30000);
      return () => clearInterval(intervalId);
    }
  }, [orderStatus]);
  return <OrderStatus status={orderStatus}>{orderStatus}</OrderStatus>;
});

Status.displayName = "Status";

export default Status;
