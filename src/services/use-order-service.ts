import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Apis } from "../constants/apis";
import { Orders } from "@/components/active-orders/activeOrders.types";

const OrderService = (): Promise<Orders> =>
  axios.get(Apis.orders).then((res) => res.data);

export const useOrderService = () => {
  const { data } = useQuery({
    queryKey: [Apis.orders],
    queryFn: () => OrderService(),
    refetchInterval: 5000,
  });
  return {
    data,
  };
};
