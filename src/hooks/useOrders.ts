import { useEffect, useState } from "react";
import {
  Order,
  StatusType,
} from "@/components/active-orders/activeOrders.types";
import { OrdersData } from "@/constants/mockData";
// import { useOrderService } from "@/services/use-order-service";

const UseOrders = () => {
  // const { data } = useOrderService();
  const [orders, setOrders] = useState<null | Order[]>(null);
  const statuses: StatusType[] = [
    "pending",
    "in-proccess",
    "delivery",
    "delivered",
  ];
  const data = OrdersData;
  const getNextOrderStatus = (currentStatus: StatusType): StatusType => {
    const currentIndex = statuses.indexOf(currentStatus);
    const nextIndex = (currentIndex + 1) % statuses.length;
    return statuses[nextIndex];
  };
  const checkAllOrdersStatus = (orders: Order[] | null) => {
    return orders?.every((order) => order.status === "delivered");
  };
  useEffect(() => {
    //TODO: probably should check if an order's app status is further than it's api status and not update it.
    data && setOrders(data.orders);
  }, [data]);
  useEffect(() => {
    if (!checkAllOrdersStatus(orders)) {
      const intervalId = setInterval(() => {
        setOrders((prevOrders) => {
          if (!prevOrders) return prevOrders;
          const updatedOrders = prevOrders.map((order) => {
            if (order.status !== "delivered") {
              return {
                ...order,
                status: getNextOrderStatus(order.status),
              };
            } else {
              return order;
            }
          });
          if (checkAllOrdersStatus(updatedOrders)) {
            clearInterval(intervalId);
          }
          return updatedOrders;
        });
      }, 30000);

      return () => clearInterval(intervalId);
    }
  }, [orders]);

  return {
    orders,
  };
};

export default UseOrders;
